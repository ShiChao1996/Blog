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
import Http, { getUrl } from '../utils/http';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  componentWillMount() {
    console.log(Http)
    let data = this.props.location.query;
    console.log(data);
    console.log(Http.url('article/getdetail'))
    Http.Post(Http.url('article/getdetail'), data, (res) => {
      if(res.status === 0){
        console.log(res)
        let md = res.resp.content
        console.log(md)
        this.setState({
          text: md.toString()
        })
      }
    }, (err) => console.log(err))
  }

  render() {
    let child = () => <div className='content'><MarkDown text={this.state.text} /></div>;
    return (
      <Container child={child} />
    )
  }
}