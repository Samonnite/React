import React, {Component} from 'react'
import {Link} from 'react-router'
import {
    Row, Col, Menu, Icon, Tabs, message,
    Form, Input, Button, CheckBox, Modal
} from 'antd'
import Logo from '../images/logo.png'

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class PCHeader extends Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0
        }
    }

    render() {
        return (
            <header>
                <Row>
                    <Col span={2}/>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={Logo} alt=""/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu onClick={this.handleClick.bind(this)} mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appStore">头条</Icon>
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appStore">国内</Icon>
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appStore">社会</Icon>
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appStore">时尚</Icon>
                            </Menu.Item>
                            <Menu.Item key="xinwen">
                                <Icon type="appStore">头条</Icon>
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appStore">娱乐</Icon>
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appStore">体育</Icon>
                            </Menu.Item>
                            {userShow}
                        </Menu>
                    </Col>
                    <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel={() => this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="关闭">
                        <Tabs type="card" onChange={this.callback.bind(this)}>

                        </Tabs>
                    </Modal>
                </Row>
            </header>
        )
    }

}

export default PCHeader = Form.create()(PCHeader);




