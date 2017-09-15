import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {
    Row,
    Col,
    Avatar
} from 'antd';

import './index.css'
import Header from '../components/header';
import HomePage from '../pages/home';

const Container = () => (
    <Router>
        <div className='container' style={{minHeight: window.screen.availHeight}}>
            <Header/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={HomePage}/>
            <Route path="/topics" component={HomePage}/>

            <div className='footer'>
                Powered by Lovae | 2017
            </div>
        </div>
    </Router>
)
export default Container