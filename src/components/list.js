import React, { Component } from 'react';
import {
  Timeline
} from 'antd';

import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import './listItem.css'
import ListItem from './listItem';

const List = (list) => {

  return (
    <Timeline pending={<a href="#">See more</a>}>
      {
        list.map((item, index) => {
          return (
            <Timeline.Item key={index}><ListItem article={item} /></Timeline.Item>
          )
        })
      }
    </Timeline>
  )
}

export default List;