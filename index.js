import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './index.css';
import Welcome from './src/pages/welcome';
import HomePage from './src/pages/home';
import ArticleDetail from './src/pages/articleDetail';

const router = (
    <Router>
        <div className='bodyContainer' style={{minHeight: document.body.clientHeight - 50}}>
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={HomePage}/>
            <Route path="/articles" component={ArticleDetail}/>
            <div className='footer'>
                Powered by Lovae | 2017
            </div>
        </div>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'));
