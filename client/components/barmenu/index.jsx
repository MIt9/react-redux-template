/**
 * Created by dima on 24.08.16.
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {} from './style.less';
let Barmenu = React.createClass({
    render() {
        return (
            <div className="barmenu" >
                <Link to="/" className="menu">menu</Link>
                <div className="mistakes">{this.props.mistakes}</div>
                <div className="counter">{this.props.completed}/{this.props.startLength}</div>
            </div>
        )
    }
});
export default Barmenu;