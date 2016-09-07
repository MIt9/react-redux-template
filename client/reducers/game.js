/**
 * Created by d.bilukha on 10.08.2016.
 */
const initialState = {
    menu:true,
    answer: null,
    result: null,
    model:[],
    mistakes:0,
    fileName:"01",
    startLength:0,
    completed:0,
    failed: [],
    list: []
};

export default function game (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_NEW_LIST':
            return { ...state,
                list: action.list,
                model : action.model,
                startLength: action.startLength,
                fileName:action.fileName,
                failed: [],
                completed:0,
                mistakes:0
            };
        break;
        case 'RETRY':
            return { ...state, result: null, answer : null};
        break;
        case 'NEXT':
        {
            const { failed, list, completed, model, fileName} = _setNext(state.list, state.failed, state.result, state.startLength);

            return {...state, result: null, answer: null, list, failed, model, completed, fileName};
        }
            break;

        case 'CHECK_ANSWER':
            return { ...state, result: action.result};
        break;
        case 'SET_ANSWER':
            let tmpResult = (state.model[0] + state.model[2]) === action.answer;
            return { ...state,
                answer : action.answer,
                result : tmpResult,
                mistakes:(!tmpResult)?state.mistakes+1: state.mistakes};
        break;

        default:
            return state;
    }
}

const _setCompleted =(listLength, failedLength, startLength)=>{
    return startLength - (listLength + failedLength);
};

const _setNext=(list, failed, result, startLength)=>{
    debugger;
    if (!result) {
        failed.push(list[0]);
    }
    list.shift();
    if(list.length === 0){
        if(failed.length === 0){
            console.log(window.location.hash);
            window.location.hash=(window.location.hash).replace('app','gameover');
            return initialState;
        }
        list = failed.concat(list);
        failed = [];
    }
    const model = list[0];
    const fileName = ''+model[0]+model[2];
    return {
        failed,
        fileName,
        model,
        completed: _setCompleted(list.length, failed.length, startLength),
        list
    }
};