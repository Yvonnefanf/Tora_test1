import Taro, { Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './cake.less'

class CakeList extends Component{
  render(){
     let {selectCata,currentList}=this.props;
    console.log(JSON.stringify(this.props.currentList))
    return(<View className='cakelist'>
    <Text>{selectCata?selectCata.name:''}</Text>
    <View className='cakelist_info'>
    {
      currentList.map((item,index)=>{
        return (<View className='cakelist_item' key={item.id}>
        <Image className='cake_img' src={require(`../../assets/images/${item.img}.jpeg`)}></Image>
        <View className='cake_details'>
        <Text>{item.title}</Text>
        <Text className='cake_details_sole'>Sole:{item.sole}</Text>
        <Text className='cake_details_price'>${item.price}</Text>
        </View>
        </View>)
      })
    }
    </View>
    </View>)
  }

}
export default CakeList