import React, { Component } from 'react';
import {
  Card,
  Affix,
  Button
} from 'antd';
import MarkDown from '../components/markdown';
import TopBar from '../components/topBar';
import Container from '../container/container';
import './articleDetail.css';
import Http from '../utils/http';

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentWillMount() {
    let data = this.props.location.query;
    Http.Post(Http.url('article/getcontent'), data, (res) => {
      if (res.status === 0) {
        let md = res.resp.content;
        this.setState({
          text: md.toString()
        })
      }
    }, (err) => console.log(err))
  }

  render() {
    let child = () => <div className='content'><MarkDown text={this.state.text}/></div>

    return (
      <Container Child={child} />
    )
  }
}

