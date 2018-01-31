import React from 'react'
import Logo from '../../component/logo/logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

class Login extends React.Component {
  register(){
    this.props.history.push('./register')
  }
  render() {
    return (
      <div>
        <Logo />
        <h2>登录</h2>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>            
          </List>
          <Button type='primary'>登陆</Button>
          <WhiteSpace />
          <Button onClick={this.register.bind(this)} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}
export default Login