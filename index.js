import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  HashRouter,
  Route
} from 'react-router-dom'
import './index.css';
import App from './src/app';

const router = (
  <HashRouter>
    <App/>
  </HashRouter>
);

ReactDOM.render(router, document.getElementById('root'));
