import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Menu, Icon } from 'antd';
import Logo from '../images/logo.png'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCHeader extends Component {
  constructor() {
    super();
    this.state = {
      current: 'top'
    }
    this.handleClick = (e) => {
      this.setState({
        current: e.key
      })
    }
  }
  render() {
    return (
      <header>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a href="/" className="logo">
              <img src={Logo} alt="logo" />
              <span>ReactNEWS</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu onClick={this.handleClick} mode="horizontal" selectedKeys={[this.state.current]}>
              <Menu.Item key="top">
                <Icon type="appstore" />头条
              </Menu.Item>
              <Menu.Item key="guonei">
                <Icon type="appstore" />guonei
              </Menu.Item>
              <Menu.Item key="shehui">
                <Icon type="appstore" />shehui
              </Menu.Item>
              <Menu.Item key="shishang">
                <Icon type="appstore" />shishang
              </Menu.Item>
              <Menu.Item key="xinwen">
                <Icon type="appstore" />xinwen头条
              </Menu.Item>
              <Menu.Item key="yule">
                <Icon type="appstore" />yule
              </Menu.Item>
              <Menu.Item key="le">
                <Icon type="appstore" />le
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}