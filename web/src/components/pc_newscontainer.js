import React, { Component } from 'react'
import { Tabs, Row, Col, Carousel } from 'antd'
import PCNewsBlock from './pc_news_block'
import PCNewsImageBlock from './pc_news_image_block'
import PCProduct from './pc_products'
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
          <Col span={20} class='container'>
            <div class="leftContainer">
              <div class="carousel">
                <Carousel {...settings}>
                  <div><img src={Carousel_1} alt="" /></div>
                  <div><img src={Carousel_2} alt="" /></div>
                  <div><img src={Carousel_3} alt="" /></div>
                  <div><img src={Carousel_4} alt="" /></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type='guoji' width="400px" cartTitle="国际头条" imageWidth="112px" />
            </div>
            <Tabs class='tabs_news'>
              <TabPane tab='新闻' key='1'>
                <PCNewsBlock count={22} type='top' width='100%' bordered='false' />
              </TabPane>
              <TabPane tab='国际新闻' key='2'>
                <PCNewsBlock count={22} type='guoji' width='100%' bordered='false' />
              </TabPane>
            </Tabs>
            <Tabs class="tabs_product">
              <TabPane tab="ReactNews 产品" key="1">
                <PCProduct />
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImageBlock count={14} type='guonei' width="100%" cartTitle="国内新闻" imageWidth="132px" />
              <PCNewsImageBlock count={14} type='yule' width="100%" cartTitle="娱乐新闻" imageWidth="132px" />
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }
}