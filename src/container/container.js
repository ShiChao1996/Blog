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
        <div className='container' style={{minHeight: window.screen.availHeight}}>
            <Header/>


            <div className='footer'>
                Powered by Lovae | 2017
            </div>
        </div>
)
export default Container