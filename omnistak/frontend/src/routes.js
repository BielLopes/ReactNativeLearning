import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login'
import Dashborad from './pages/Dashborad'
import New from './pages/New'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashborad} />
            <Route exact path="/new" component={New} />
        </Switch>
    </BrowserRouter>
);

export default Routes;