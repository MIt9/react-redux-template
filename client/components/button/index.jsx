import React, { PropTypes } from 'react';
import Pubsub from 'pubsub-js';
import * as gameActions from '../../actions/GameActions';
let Button = React.createClass({

    _onClick(){
        console.log(this.props);
        this.props.answer(this.props.value);
        Pubsub.publish('setAnswer', {value:this.props.value});
    },

    render() {
        return (
            <li onClick={this._onClick}>{this.props.value}</li>
        )
    }
});
Button.propTypes = {
    //answer : PropTypes.func.isRequired
};
export default Button;