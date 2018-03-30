import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import Radio from 'antd/lib/radio';
import PropTypes from 'prop-types';
import {
  Route,
  Link,
} from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';
import './welcome.css';
import HomePage from './home';
import LogoGather from '../components/gatherBack';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require('../image/background.png'),
      pixSize: 20,
      pointSize: 10,
      isMode: false,
      show: false,
    };
  }

  render() {
    return (
      <LogoGather
        image={this.state.image}
        pixSize={this.state.pixSize}
        pointSizeMin={this.state.pointSize}
        title="Welcome to Lovae's Blog"
      />
    )
  }
}
