import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native'



export default class Design extends Component {
  render() {
    return (
      <View style={style1.container}>
        <View style={style1.container1}></View>

      </View>
     
    )
    
  }
 
}
var style1 = StyleSheet.create({
    container:
    {
        width:250,
        height:250,
        backgroundColor: 'blue',
    },
    container1:
    {
        width:25,
        height:25,
        backgroundColor:'cyan',
        alignItems: 'center',
        margin: 25,
    }
  
})
