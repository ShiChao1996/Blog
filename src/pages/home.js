import React, { Component } from 'react';
import List from '../components/list';
import {
  Card,
  Affix,
  Button
} from 'antd';
import Side from '../components/sider';
import './home.css';
import Header from '../components/header';
import Canvas from './animateBackground';
import Cache from '../cache/cache';
import Http from '../utils/http';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: []
    }
  }

  componentWillMount() {
    if (Cache.exist('articleList')) {
      this.setState({
        articleList: Cache.getCache('articleList')
      });
      return;
    }
    Http.Get(Http.url('article/getall'), (res) => {
      if (res.status === 0) {
        Cache.saveList('articleList', res.resp);
        this.setState({
          articleList: res.resp
        })
      }
    }, (err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="body">
        <Header/>
        <Canvas/>
        <div className='content'>
          <Card>
            {List(this.state.articleList,)}
          </Card>
        </div>

        {/*<div className="bodyLeft">
                    <Affix>
                        <div className='box'>
                            { Side('Lovae', '杨柳岸，晓风残月') }
                        </div>
                    </Affix>
                </div>
                <div className='footer'>
                    <p>© 2017 ♥ ShiChao</p>
                    <span>Powered by Lovae | 2017</span>
                </div>*/}
        <div className='footer'>
          Made by Lovae | 2017
        </div>
      </div>
    )
  }
}