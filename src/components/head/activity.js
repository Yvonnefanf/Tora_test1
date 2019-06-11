import Taro, { Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './activity.less'

class Activity extends Component{
  render(){
    return (<View className='activity'>
      <Text className='type'>减</Text>
      <Text>满100减99；满200减199；满500减1000</Text>
      <Text className='length'>3个活动</Text>
    </View>)
  }

}

export default Activity;