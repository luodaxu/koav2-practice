import React from 'react';
import { Route, Router, Redirect, browserHistory } from 'react-router';

import Nav from './containers/Nav';
import Content from './containers/Content';

const routes  = (
    <Router history={browserHistory}>
        <Route component={Nav}>
            <Route path="/" component={Content} />
        </Route>
    </Router>
);

export default routes;
