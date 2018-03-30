import React, { Component } from 'react'
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './index.css'
import TopBar from '../components/topBar';
import HomePage from '../pages/home';
import ArticleDetail from '../pages/articleDetail';
import Archieve from '../pages/archieve';
import NotFound from '../pages/notfound';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

 /* componentDidMount() {
    window.addEventListener("move", this.handleScroll)
  }

  handleScroll = (e) => {
    this.refs.header.handleScroll(e)
  };*/

  render() {
    return (
      <div className='container' style={{ minHeight: window.screen.availHeight - 70 }}>
        <TopBar type='light' ref="header"/>
        <br/>
        <div>
          <Switch>
            <Route path="/index/" exact component={HomePage}/>
            <Route path="/index/article" component={ArticleDetail}/>
            <Route path="/archive" component={Archieve}/>
            <Route path="/index/about" component={NotFound}/>
          </Switch>
        </div>
        <div className='footer'>
          Powered by Lovae | 2017
        </div>
      </div>
    )
  }
}
