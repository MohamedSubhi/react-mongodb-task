import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import ApolloClient from "apollo-boost";
import { createStore } from 'redux'
import { Provider }from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);
export const client = new ApolloClient({
  uri: "http://localhost:3001/graphql"
});
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
