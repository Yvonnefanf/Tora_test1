import Taro, { Component} from '@tarojs/taro'
import { View, Text} from '@tarojs/components'
import './cata.less'

class Cata extends Component{
  constructor(){
    super(...arguments);
    this.state={
      selectCata:null,
      cata:[
        {name:'Special',id:1},
        {name:'Hot',id:2},
        {name:'Sale',id:3},
        {name:'Staple',id:4},
        {name:'Western',id:5},
        {name:'Dessert',id:6},
        {name:'Special',id:7},
      ]
    }
  }
  clickCata(item){
    if(this.state.selectCata&&this.state.selectCata.id!=item.id){
      this.setState({selectCata:item},()=>{
        this.props.onChangeCata&&this.props.onChangeCata(this.state.selectCata)
      })
    }else if(!this.state.selectCata){
      this.setState({selectCata:item},()=>{
        this.props.onChangeCata&&this.props.onChangeCata(this.state.selectCata)
      })
    }

  }
  render(){
    let {selectCata,cata}=this.state
    return(<View className='cata'>{
        cata.map((item,index)=>{
        return (<Text onclick={this.clickCata.bind(this,item)} className={'cata_name '+((selectCata&&selectCata.id==item.id)?'cata_selected':'')} key={item.id}>{item.name}</Text>)
      })
    }
    </View>)

  }
}
export default Cata;