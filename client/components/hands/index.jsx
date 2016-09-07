import React, { PropTypes } from 'react';
let Hands = React.createClass({

    render() {
        let url = 'images/examples/'+this.props.fileName+'.png';
        let style = {backgroundImage: "url("+url+")"};
        return (
            <div className="hands" style={style}></div>
        )
    }
});
Hands.propTypes = {
    fileName : PropTypes.string.isRequired
};
export default Hands;