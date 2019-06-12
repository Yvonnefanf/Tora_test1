import Taro, { Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './activity.less'

class Activity extends Component{
  constructor(){
    super(...arguments);
    this.state={
      activity:[
        {
          type:"cut",
          info:[{total:100,cut:99},{total:200,cut:199},{total:500,cut:999}]
        }
      ]
    }
  }
  getTextByType(type){
    switch(type){
      case 'cut':
      return 'S'
          break;
      default:
      return 'S'
      break;
    }
  }
  getCutInfo(arr){
    return arr.map((item,index)=>`Full${item.total}mi${item.cut}`).join(' ; ')

  }
  render(){
    let {activity:[firstItem]}=this.state;
    return (<View className='activity'>
      <Text className='type'>{this.getTextByType(firstItem.type)}</Text>
      <Text>{this.getCutInfo(firstItem.info)}</Text>
      <Text className='length'>{this.state.activity.length} activity</Text>
    </View>)
  }

}

export default Activity;