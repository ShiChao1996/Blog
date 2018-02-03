import React, { Component } from 'react';
import {
  Spin
} from 'antd';
import MarkDown from '../components/markdown';
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
    console.log("detail init")
    let data = this.props.location.query;
    console.log(this.props.location)
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
    return (
      <div className='content'>
        {
          this.state.text === "" ? <Spin size="large"/> : <MarkDown text={this.state.text}/>
        }
      </div>
    )
  }
}

