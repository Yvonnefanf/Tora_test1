import Taro, { Component} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Cata from './cata'
import CakeList from './cake'
import './food.less'

class Food extends Component{
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      tabList:[{ title: 'Food List' }, { title: 'Comments' }, { title: 'Store' }],
      cakeList:[],
      currentList:[]
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  changeCata(selectCata) {
    if(this.state.cakeList.some(item=>item.pid==selectCata.id)){
      // 不需要加载数据
      this.setState({currentList:this.state.cakeList.filter(item=>item.pid==selectCata.id)})

    }else{
       // 需要加载数据
      this.setState({cakeList:this.state.cakeList.concat(this.getData(selectCata))},()=>{
      this.setState({currentList:this.state.cakeList.filter(item=>item.pid==selectCata.id)})
      })
    }
  }
  getData(selectCata){
    let count=Math.round(Math.random()*2)
    let imgurl=`../../assets/images/${count}.jpeg`
    return Array.from(Array(Math.round(Math.random()*20)),(v,k)=>({sole:Math.round(Math.random()*20),price:Math.round(Math.random()*20),img:count,pid:selectCata.id,id:selectCata.id+'_',title:'Type'+selectCata.id+'_'+'FoodType'+(k+1)}))
  }
  render(){
    let {current,tabList,currentList,selectCata}=this.state
    return(<View>
      <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
      <AtTabsPane current={current} index={0} >
          <View className='food_body'>
          <Cata onChangeCata={this.changeCata.bind(this)}></Cata>
          <CakeList selectCata={selectCata} currentList={currentList}></CakeList>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页3的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>)

  }
}
export default Food;