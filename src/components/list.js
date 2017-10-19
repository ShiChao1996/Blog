import React, { Component } from 'react';
import {
  Card,
  Tag
} from 'antd';
import {
  Route,
  Link,
} from 'react-router';
import QueueAnim from 'rc-queue-anim';
import { tools } from '../utils/tools';
import './listItem.css'

const colors = [ 'pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple' ]

const List = (list, onClick) => {
  return (
    <QueueAnim interval={300}>
      {list.map((line, index) => {
          return (
            <div className="listItem" key={index} onClick={() => onClick && onClick()}>
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
          )
        }
      )}
    </QueueAnim>
  )

}

export default List;