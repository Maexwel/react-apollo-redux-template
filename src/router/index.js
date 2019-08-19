import React from 'react'
import App from '../components/page/app'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes;