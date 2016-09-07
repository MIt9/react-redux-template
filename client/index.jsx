import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory} from 'react-router';
import { loadState, saveState } from './util/local/index.js';

import App from './components/index.jsx';
import Menu from './container/menu/index.jsx';
import GameOver from './container/gameover/index.jsx';
import configureStore from './store/configureStore'

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(()=>{
   saveState({
       game:store.getState().game
   });
});


render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Menu}/>
            <Route path="/app/(:isNewGame)" component={App}/>
            <Route path="/gameover/(:hasTag)" component={GameOver}/>
        </Router>
    </Provider>, document.getElementById('app'));
