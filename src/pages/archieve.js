import React, { Component } from 'react';
import {
  Card,
  Affix,
  Button,
  Row,
  Col
} from 'antd';
import Container from '../container/container';
import List from '../components/list';
import './archieve.css';
import Http from '../utils/http';

const colors = [ 'pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple' ];

class Archieve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      articles: []
    }
  }

  componentWillMount() {
    Http.Get(Http.url('article/gettags'), (res) => {
      console.log(res);
      if (res.status === 0) {
        this.setState({
          tags: res.resp.tags
        })
      }
    }, (err) => {
      console.log(err)
    })
  }

  getArticleByTag(tag) {
    Http.Post(Http.url('article/getbytag'), { tag }, (res) => {
      if (res.status === 0) {
        console.log()
        this.setState({
          articles: res.resp
        });
      }
    })
  }

  render() {
    return (
      <div className='tagsGrid'>
        <Row>
          {
            this.state.tags.map((tag, index) => {
              return (
                <Col xs={20} sm={12} md={8} lg={6} key={index}>
                  <Card onClick={() => this.getArticleByTag(tag)}
                        style={{ backgroundColor: colors[ index % colors.length ] }} className='tag-card'>{tag}</Card>
                </Col>
              )
            })
          }
          <div className="tagged-list">
            {
              this.state.articles.length === 0 ? null : List(this.state.articles)
            }
          </div>
        </Row>
      </div>
    )
  }
}

export default class ArchivePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container Child={() => {
        return (
          <div className="archieve-content">
            <Archieve/>
          </div>
        )
      }}/>
    )
  }
}