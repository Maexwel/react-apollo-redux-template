import 'babel-polyfill';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/index.js'
import { Provider } from 'react-redux'
import storeFactory from './store/index'
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

const store = storeFactory() // intialisation du store redux

/** Fonction de création du client apollo */
const createApolloClient = (authToken) => {
    return new ApolloClient({
        link: new HttpLink({
            uri: 'https://graphql-domain/graphql',
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }),
        cache: new InMemoryCache(),
    });
};
/** ENTRY POINT OF THE APP */

ReactDOM.render(
    <ApolloProvider client={createApolloClient()}>
        <Provider store={store}>
            <Router />
        </Provider>
    </ApolloProvider>
    , document.getElementById('root'));

serviceWorker.unregister();