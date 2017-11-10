import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import './index.css'
import TopBar from '../components/topBar';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Child } = this.props;
    return (
      <div className='container' style={{ minHeight: window.screen.availHeight - 70 }}>
        <div className="head">
          <TopBar type='dark'/>
        </div>
        {
          typeof Child === 'function' ? Child() : <Child/>
        }
        <div className='footer'>
          Powered by Lovae | 2017
        </div>
      </div>
    )
  }
}
