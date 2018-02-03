import React from 'react'
import { Result, List, WhiteSpace, Button } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import { connect } from 'react-redux'

@connect(
    state => state.user
)
class User extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.logout = this.logout.bind(this)
    // }
    logOut(){
        browserCookie.erase('userid')
        console.log('logout')
    }
    render() {
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        const user = props.user ?
            <div>
                <Result
                    img={<img src={require(`../img/${this.props.avatar}.png`)} style={{ width: 50 }} />}
                    title={props.title}
                    message={props.type === 'boss' ? props.company : null}
                />
                <List renderHeader={() => '简介'}>
                    <Item multipleLine>
                        {props.title}
                        {props.desc.split('\n').map(v => <Brief key={v}>{v}</Brief>)}
                        {props.money ? <Brief > {props.money}</Brief> : null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
            </div > : null
        return (<div>
            {/* {user} */}
            <Button onClick={this.logOut.bind(this)}>退出登录</Button>
        </div>
        )
    }
}

export default User