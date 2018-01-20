import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router'
import PCIndex from './components/pc_index'
import MobileIndex from './components/mobile_index'
import MediaQuery from 'react-responsive'
import 'antd/dist/antd.css'


export default class Index extends Component {
  render() {
    return (
      <div >
        <MediaQuery query="(min-device-width:1224px)">
          <PCIndex />
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <MobileIndex />
        </MediaQuery>
      </div>
    );
  };
}


ReactDOM.render(<Index />,  document.getElementById('mainContainer'));

