import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/App/index';
// import * as serviceWorker from './serviceWorker';

const app = <BrowserRouter>
        <App />
    </BrowserRouter>

ReactDOM.render(app, document.getElementById('root'));

// If you want your App to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();