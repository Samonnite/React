import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import PCIndex from './components/pc_index'
import MobleIndex from './components/mobile_index'
import PCNewsDetails from './components/pc_news_details'
import MobileNewsDetails from './components/mobile_news_details'
import MobileIndex from './components/mobile_index'
import MediaQuery from 'react-responsive'
import 'antd/dist/antd.css'


export default class Index extends Component {
  render() {
    return (
      <div >
        <MediaQuery query="(min-device-width:1224px)">
          <Router history={hashHistory}>
            <Route path='/' component={PCIndex} />
            <Route path='/details/:uniquekey' component={PCNewsDetails} />
          </Router>
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <Router history={hashHistory}>
            <Route path='/' component={MobleIndex} />
            <Route path='/details/:uniquekey' component={MobileNewsDetails} />
          </Router>
        </MediaQuery>
      </div>
    );
  };
}


ReactDOM.render(<Index />, document.getElementById('mainContainer'));

