import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    Route,
    Link,
    Router,
    hashHistory,
    IndexRoute
} from 'react-router';
import './index.css';
import Welcome from './src/pages/welcome';
import HomePage from './src/pages/home';
import ArticleDetail from './src/pages/articleDetail';

const router = (
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={Welcome} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/home" component={HomePage}/>
            <Route path="/archive" component={HomePage} />
            <Route path="/article" component={ArticleDetail} />
        </Route>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'));
