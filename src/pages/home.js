import React, { Component } from 'react';
import {
  Card,
} from 'antd';
import './home.css';
import Canvas from './animateBackground';
import Cache from '../cache/cache';
import Http from '../utils/http';
import List from '../components/list';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
      showHead: true
    }
  }

  componentWillMount() {
    console.log("home init!")
    if (Cache.exist('articleList')) {
      this.setState({
        articleList: Cache.getCache('articleList')
      });
      return;
    }
    Http.Get(Http.url('article/getall'), (res) => {
      if (res.status === 0) {
        let l = res.resp.reverse();
        Cache.saveList('articleList', l);
        this.setState({
          articleList: l,
        })
      }
    }, (err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="body">
        <div>
          <Canvas/>
          <div className='home-content'>
            {
              this.state.articleList.length === 0 ? null :
              <Card>
                <List list={this.state.articleList}/>
              </Card>
            }
          </div>
        </div>
      </div>
    )
  }
}