import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {
  Avatar
} from 'antd';
import './topBar.css';
import { tools } from '../utils/tools'

export default class topBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }

  handleScroll = (e) => {
    console.log(e)
    if (tools.scrollTop() > 400 && this.state.show) {
      this.setState({
        show: false
      });
      return
    }
    if (tools.scrollTop() < 400 && !this.state.show) {
      this.setState({
        show: true
      });
    }
  };

  render() {
    const { type } = this.props;
    const light = type ? (type === 'light') : true;
    return (
      <div className={this.state.show ? 'headBar' : 'headBar hide'}>
        <div className='avatarBox'>
          <Avatar src={require('../image/avatar.png')} size='large'/>
          <span className='name'>Lovae</span>
        </div>

        <div className='headLinksBox'>
          <div className='myButton'>
            <Link to='/index/' className={light ? 'linkLight' : 'linkDark'}>Home</Link>
          </div>
          <div className='myButton'>
            <Link to='/index/archive' className={light ? 'linkLight' : 'linkDark'}>archive</Link>
          </div>
          <div className='myButton'>
            <Link to='/#/about' className={light ? 'linkLight' : 'linkDark'}>About Me</Link>
          </div>
        </div>
      </div>
    )
  }
}