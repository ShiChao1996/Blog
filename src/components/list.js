import React, { Component } from 'react';
import {
  Timeline
} from 'antd';
import { OverPack } from 'rc-scroll-anim';
import './listItem.css'
import ListItem from './listItem';

export default class List extends Component {
  render() {
    let { list } = this.props;
    return (
      <Timeline pending={<a href="#">See more</a>}>
        {
          list.map((item, index) => {
            return (
              <Timeline.Item key={index}><ListItem article={item}/></Timeline.Item>
            )
          })
        }
      </Timeline>
    )
  }
}