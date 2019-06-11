import Taro,{Component} from '@tarojs/taro'
import {View,Text} from '@tarojs/components'

class Child extends Component {
  render(){
    return (<View>{this.props.name}</View>)
  }
}
Child.defaultProps={
  name: '111'
}
export default Child;