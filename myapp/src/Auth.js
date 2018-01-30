import React from 'react'
import {connect} from 'react-redux'
import {login} from './Auth.redux'

//  两个reducers 每个两个reducers都有state
//  需要合并
@connect(
  state=>state
)
class Auth extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <h2>Auth page</h2>
  }
}
export default Auth