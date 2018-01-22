import React, { Component } from 'react'
import { Tabs, Row, Col, Carousel } from 'antd'
import PCNewsBlock from './pc_news_block'
import Carousel_1 from '../images/carousel_1.jpg'
import Carousel_2 from '../images/carousel_2.jpg'
import Carousel_3 from '../images/carousel_3.jpg'
import Carousel_4 from '../images/carousel_4.jpg'
const TabPane = Tabs.TabPane

export default class PCNewsContainer extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    }
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  <div><img src={Carousel_1} alt="115156" /></div>
                  <div><img src={Carousel_2} alt="" /></div>
                  <div><img src={Carousel_3} alt="" /></div>
                  <div><img src={Carousel_4} alt="" /></div>
                </Carousel>
              </div>
            </div>
            <Tabs className="tab_new">
              <TabPane tab="头条新闻" key="1">
                <PCNewsBlock count={22} type="top" width="100%" bordered="false" />
              </TabPane>
              <TabPane tab="国际新闻" key="2">
                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false" />
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}