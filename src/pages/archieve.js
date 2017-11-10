import React, { Component } from 'react';
import {
  Card,
  Affix,
  Button,
  Row,
  Col
} from 'antd';
import MarkDown from '../components/markdown';
import TopBar from '../components/topBar';
import Container from '../container/container';
import './archieve.css';
import Http, { getUrl } from '../utils/http';

const colors = [ 'pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple' ];

class Archieve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    }
  }

  componentWillMount() {
    Http.Get(getUrl('article/gettags'), (res) => {
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

  render() {
    return (
      <div className='tagsGrid'>
        <Row>
          {
            this.state.tags.map((tag, index) => {
              return (
                <Col xs={20} sm={12} md={8} lg={6} key={index}>
                  <Card style={{backgroundColor: colors[index%colors.length]}} className='tag-card'>{tag}</Card>
                </Col>
              )
            })
          }
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
      <Container Child={Archieve}/>
    )
  }
}