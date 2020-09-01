// 所有小程序的入口

import React, { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.scss'

const store = {
  counterStore
}

class App extends Component {
  
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
