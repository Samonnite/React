import React, { Component } from 'react'
import MobileHeader from './mobile_header'
import MobileFooter from './mobile_footer'
import MobileList from './mobile_list'
import { Tabs, Carousel } from 'antd'
import Carousel_1 from '../images/carousel_1.jpg'
import Carousel_2 from '../images/carousel_2.jpg'
import Carousel_3 from '../images/carousel_3.jpg'
import Carousel_4 from '../images/carousel_4.jpg'
import '../css/mobile.css'
const TabPane = Tabs.TabPane
export default class MobileIndex extends Component {
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
        <MobileHeader />
        <Tabs>
          <TabPane tab="头条" key="1">
            <div class="carousel">
              <Carousel {...settings}>
                <div><img src={Carousel_1} alt="" /></div>
                <div><img src={Carousel_2} alt="" /></div>
                <div><img src={Carousel_3} alt="" /></div>
                <div><img src={Carousel_4} alt="" /></div>
              </Carousel>
            </div>
            <MobileList count={20} type="top" />
          </TabPane>
          <TabPane tab="社会" key="2">
            <MobileList count={20} type="shehui" />
          </TabPane>
          <TabPane tab="国内" key="3">
            <MobileList count={20} type="guonei" />
          </TabPane>
          <TabPane tab="国际" key="4">
            <MobileList count={20} type="guoji" />
          </TabPane>
          <TabPane tab="娱乐" key="5">
            <MobileList count={20} type="yule" />
          </TabPane>
        </Tabs>
        <MobileFooter />
      </div>
    )
  }
}
