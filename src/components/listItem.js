import React, { Component } from 'react';
import {
  Card,
  Tag
} from 'antd';
import { tools } from '../utils/tools';
import './listItem.css';

const colors = [ 'pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple' ]

export default class ArticleListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { article } = this.props;
    return (
      <div>
        <Card>
          {
            article.image ? <img src="http://tpl.amazeui.org/template/7/blog/assets/i/b2.jpg" className="image" /> : null
          }
          <h1>{article.title}</h1>
          <div>
            {article.tags.map((tag, Index) => {
              return <Tag key={tools.generalKey()}
                          color={colors[ tools.randomInt(0, colors.length - 1) ]}>{tag}</Tag>
            })}
          </div>
        </Card>
      </div>
    )
  }
}