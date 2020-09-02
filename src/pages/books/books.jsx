import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'


export default class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:['eat', 'sleep', 'learn']
    }
  }

  render() {
    return <view>
      <Text>Taro Demo</Text>
      {
        this.state.todos.map((item, i)=>{
          return <view>
            <Text>{i+1} : {item}</Text>
          </view>
        })
      }
    </view>
  }
}
