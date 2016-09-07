import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {} from './style.less';
let Menu = React.createClass({

    render() {
        const hasGame = localStorage.getItem('save');
        return (
            <div className="menu" >
                <h1 className="menuHeader"><span>to10</span></h1>
                <Link to="app/n" className="start"><span>new game</span></Link>
                {hasGame?<Link to="app/c" className="start"><span>continue</span></Link>:null}
            </div>
        )
    }
});
export default Menu;