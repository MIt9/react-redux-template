import React, { PropTypes } from 'react';
import {} from './style.less';
let Example = React.createClass({

    render() {
        let situation = "";
        if(this.props.answer !== null){
            situation = (this.props.result)?"good":"bad";
        }
        return (
            <div className={"math "+ situation}>
                <div className="left">{this.props.model[0]}</div>
                <div className="symbol">{this.props.model[1]}</div>
                <div className="right">{this.props.model[2]}</div>
                <div>=</div>
                <div className="answer">{this.props.answer}</div>
            </div>
        )
    }
});
Example.propTypes = {
    model : PropTypes.array.isRequired
};
export default Example;