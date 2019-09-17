import React from 'react';
import App from '../components/page/app';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { constants as C } from './constants';

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={C.APP_ROUTE} component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes;