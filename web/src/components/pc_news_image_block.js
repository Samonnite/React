import React, { Component } from 'react'
import { Card } from 'antd'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class PCNewsImage extends Component {
  constructor() {
    super()
    this.state = {
      news: ''
    }
  }
  componentWillMount() {
    var myFetchOptions = {
      method: 'GET'
    }
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" +
      this.props.type + "&count=" + this.props.count, myFetchOptions)
      .then(response =>
        // console.log('response', response)
        response.json()
      )
      .then(json => {
        console.log('json', json)
        this.setState({ news: json })
      })
  }
  render() {
    const { news } = this.state
    const newList = news.length
      ?
      news.map((newsItem, index) => (
        <div key={index} className="imageblock">
          <Link to={`details/${newsItem.uniquekey}`} target="_blank">
            <div className="custom-image">
            <img src={newsItem.thumbnail_pic_s} alt="" style={styleImage}/>
            </div>
            <div className=""></div>
          </Link>
        </div>
      ))
      :
      '没有加载到任何新闻'
    return (
      <div className="topNewsList">
        <Card title={this.props.cartTitle} bordered={true} style={{ width: this.props.width }}>
          {newList}
        </Card>
      </div>
    )
  }
}