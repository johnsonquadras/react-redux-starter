import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage';
import CrudPage from './components/crud/CrudPage';

const Routes = (<Route path="/" component={App}>
                    <IndexRoute component={HomePage} />
                    <Route path="home" component={HomePage} />
                    <Route path="crud" component={CrudPage} />
               </Route>);

export default Routes;
