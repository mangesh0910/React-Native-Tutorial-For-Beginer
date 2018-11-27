import React, { Component } from 'react'
import { Text, View ,Image} from 'react-native'

export class Display extends Component {
  render() {
      let msg = ' Welcome to RMCET College'
     
      let isource1 = {width:700, height:700}
    return (
      <View>
        <Text> {msg}</Text>
        <Image source={'C:/AwesomeProject/New folder/123.jpg'}
                style = {isource1}
        >



        </Image>
      </View>
    )
  }
}

export default Display
