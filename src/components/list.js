import React, { Component } from 'react';
import {
  Card,
  Tag,
  Timeline
} from 'antd';

import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import './listItem.css'
import ListItem from './listItem';

const List = (list, onClick) => {
  console.log(list)
  /*return (
    <div>
      {list.length === 0 ? null
        :
        list.map((line, index) => {
          return (
            <OverPack key={index} >
              <div className="listItem" onClick={() => onClick && onClick()}>
                <Link to={{ pathname: '/article', query: {id: line._id} }} className='myLink'>
                  <Card>
                    <h2>{line.title}</h2>
                    <span className='contentPreview'>{line.content.toString().slice(0, 100)}...</span>
                    <div>
                      {line.tags.map((tag, Index) => {
                        return <Tag key={tools.generalKey()}
                                    color={colors[ tools.randomInt(0, colors.length - 1) ]}>{tag}</Tag>
                      })}
                    </div>
                  </Card>
                </Link>
              </div>
            </OverPack>
          )
        }
      )}
    </div>
  )*/

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