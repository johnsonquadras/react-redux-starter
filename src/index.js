
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import HomePage from './components/home/HomePage';
import CrudPage from './components/crud/CrudPage';
import Routes from './routes';

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import {loadUsers} from './actions/userActions';

const store = configureStore();
store.dispatch(loadUsers());

render(
    (
        <Provider store={store}>
            <Router history={browserHistory}>
               {Routes}
            </Router>
        </Provider>
    ),

    document.getElementById('app')
);
