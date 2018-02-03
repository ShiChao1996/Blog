import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import './index.css';
import App from './src/app';

const router = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
