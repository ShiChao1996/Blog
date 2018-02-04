import React, { Component } from 'react';
import {
  Card,
  Tag
} from 'antd';
import { tools } from '../utils/tools';
import Http from '../utils/http';
import moment from 'moment';
import {
  Route,
  Link,
} from 'react-router-dom';
import './listItem.css';

const colors = [ 'pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple' ];

export default class ArticleListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { article } = this.props;
    const image = article.image ? article.image.slice(15) : '';
    return (
      <div className="listItem">
        <p className="date">{moment(article.date).format("LLLL")}</p>
        <div className="card">
          <Card>
            <h1>
              <Link to={{
                pathname: '/index/article',
                query: {_id: article.contentId},
                search: "_id=" + article.contentId,
              }}>
                {article.title}
              </Link>
            </h1>
            <div className="tags">
              {article.tags.map((tag, Index) => {
                return <Tag key={tools.generalKey()}
                            color={colors[ tools.randomInt(0, colors.length - 1) ]}>{tag}</Tag>
              })}
            </div>
            {
              article.image ? <img src={Http.picUrl(image)} className="image"/> : null
            }
          </Card>
        </div>
      </div>
    )
  }
}