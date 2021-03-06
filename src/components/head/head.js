import Taro, { Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Top from './top'
import Activity from './activity'
import './head.less'

class Head extends Component{
  constructor(){
    super(...arguments)
    this.state={
      store:{
        title:'YvonneDeDian',
        notice:'Welcome',
        tags:['666','333','777']
      }
    }
  }
  render(){
    let {store}=this.state;
    return (<View className='head'>
      <Top />
      <Image className='back' src={require('../../assets/images/backimg.jpg')}></Image>
      <View className='store'>
      <Image className='store_img' src={require('../../assets/images/backimg.jpg')}></Image>
      <View className='store_info'>
      <Text>{store.title}</Text>
      <Text>{store.notice}</Text>
      <View>
        {
          store.tags.map((item,index)=><Text className='tags_text' key={index}>{item}</Text>)
        }
      </View>
      </View>
      </View>
      <Activity></Activity>
    </View>)
  }
}
  export default Head;