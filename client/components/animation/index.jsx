import React, { PropTypes } from 'react';
let Animation = React.createClass({
    render() {
        let gif = (this.props.result)?"good_":"bad_";
        let num = Math.floor(Math.random() * 3) + 1;
        let url = 'images/gif/'+gif+num+'.gif';
        return (
            <div className="animation" >
                <img src={url}/>
            </div>
        )
    }
});
export default Animation;