/**
 * Created by d.bilukha on 10.08.2016.
 */
const model = {
    1: [[0, "+", 1]],
    2: [[0, "+", 2], [1, "+", 1]],
    3: [[0, "+", 3], [1, "+", 2], [2, "+", 1]],
    4: [[0, "+", 4], [1, "+", 3], [2, "+", 2], [3, "+", 1]],
    5: [[0, "+", 5], [1, "+", 4], [2, "+", 3], [3, "+", 2], [4, "+", 1]],
    6: [[0, "+", 6], [1, "+", 5], [2, "+", 4], [3, "+", 3], [4, "+", 2], [5, "+", 1]],
    7: [[0, "+", 7], [1, "+", 6], [2, "+", 5], [3, "+", 4], [4, "+", 3], [5, "+", 2], [6, "+", 1]],
    8: [[0, "+", 8], [1, "+", 7], [2, "+", 6], [3, "+", 5], [4, "+", 4], [5, "+", 3], [6, "+", 2], [7, "+", 1]],
    9: [[0, "+", 9], [1, "+", 8], [2, "+", 7], [3, "+", 6], [4, "+", 5], [5, "+", 4], [6, "+", 3], [7, "+", 2], [8, "+", 1]],
    10: [[0, "+", 10], [1, "+", 9], [2, "+", 8], [3, "+", 7], [4, "+", 6], [5, "+", 5], [6, "+", 4], [7, "+", 3], [8, "+", 2], [9, "+", 1]]
};

function _shuffleAll() {
    let k = Object.keys(model);
    let all = [];
    for (let i = 0; k.length > i; i++) {
        let tmp = model[k[i]];
        let sheffelArray = [];
        sheffelArray = tmp.concat(all);
        all = _shuffle(sheffelArray);

    }
    return all;
}

function _shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export function newList() {
    const list = _shuffleAll();
    const model = list[0];
    const fileName = ""+model[0]+model[2];
    const startLength = list.length;
    return {
        type: 'SET_NEW_LIST',
        list: list,
        startLength,
        model,
        fileName
    }
}
export function setNext() {
    return {
        type: 'NEXT'

    }
}

export function setRetry() {
    return {
        type: 'RETRY'
    }
}

export function setAnswer(answer) {
    return {
        type: 'SET_ANSWER',
        answer: answer
    }
}

export function checkAnswer(model, userAnswer) {
    const correct = model[0]+model[2];
    const result = (parseInt(correct) === parseInt(userAnswer));
    return {
        type: 'CHECK_ANSWER',
        result: result,
        answer: userAnswer
    }
}
