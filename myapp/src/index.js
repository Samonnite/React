import React from 'react'
import ReactDom from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Switch,Redirect} from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
// import { counter } from './index.redux'
import reducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
class Test extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <h1>测试组件 {this.props.match.parmas.location} </h1> 
  }
}
ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
        <Redirect to='/dashboard'></Redirect>
      </Switch>
    </BrowserRouter>
  </Provider>)
  , document.getElementById('root')
)


