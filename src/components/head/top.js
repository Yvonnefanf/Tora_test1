import Taro, { Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './top.less'

class Top extends Component{
  render(){
    return (<View className='top'>
    <View className='left'>
    <Image className='img' src={require("../../assets/images/back.png")} />
    </View>
    <View className='right'>
    <Image className='img' src={require("../../assets/images/search.png")} />
    <Image className='img' src={require("../../assets/images/like.png")} />
    <Image className='img' src={require("../../assets/images/more.png")} />
    </View>
    </View>)
  }
}
export default Top;