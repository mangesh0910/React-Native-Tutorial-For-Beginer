import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'



export default class Design1 extends Component {
  render() {
    return (
        <View>
      <Text style={style1.firstText}>Welcome In RMCET</Text>
      <Text style={style1.secondText}>Welcome In Computer Department</Text>
    
      </View>
    )
  }
}
const style1 = StyleSheet.create({
    firstText:{
        fontSize:25,
        fontWeight: 'normal',
        color:'blue'
    },
    secondText:{
        fontSize:15,
        fontWeight:'bold',
        color:'cyan'
    }
})

