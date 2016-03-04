import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import store from './store';
import routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document.getElementById('app')
);
