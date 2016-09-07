import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../button/index.jsx';
import {} from './style.less';
import * as gameActions from '../../actions/GameActions';

let Keyboard = React.createClass({
    _handleClick(i, item){
        this.props.gameActions.setAnswer(item)
    },
    _renderButtons() {
        const buttonsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let self = this;
        return buttonsArray.map(function (item, it) {
            return (<li onClick={self._handleClick.bind(self, it, item)} key={it}><span>{item}</span></li>)
        });
    },

    render() {

        return (
            <ul className="keyboard">
                {this._renderButtons()}
            </ul>
        )
    }
});

function mapDispatchToProps(dispatch) {
    return {
        gameActions: bindActionCreators(gameActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Keyboard)

