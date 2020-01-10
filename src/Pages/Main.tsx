import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Login from '../Pages/Login/Login';
import Header from './Header';
import Home from './Home';

export default function Main() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}