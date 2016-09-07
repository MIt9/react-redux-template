import React from 'react';
import {} from './style.less';
import Pubsub from 'pubsub-js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gameActions from '../../actions/GameActions';

let Moves = React.createClass({

    _retry(){
        const {setRetry} = this.props.gameActions;
        setRetry();
    },
    _next(){
        const {setNext} = this.props.gameActions;
        setNext();
    },

    render() {

        return (
            <div className="move">
                <div className="retry" onClick={this._retry}></div>
                <div className="next" onClick={this._next}></div>
            </div>
        )
    }
});

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Moves)