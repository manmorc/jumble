import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';


import './components/App/index.scss';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
