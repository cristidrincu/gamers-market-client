import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import reduxThunk from 'redux-thunk';
import rootReducers from './rootReducer';
import routes from './routes';
import * as serviceWorker from './serviceWorker';

const persistedState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, persistedState, composeEnhancers(applyMiddleware(reduxThunk)));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes}/>
    </Provider>
    , document.querySelector('.app')
);
serviceWorker.unregister();

