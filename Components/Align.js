import React, { Component } from 'react'
import {View} from 'react-native'

export default class Align extends Component {
  render() {
    return (
      <View style={{flex:1}}>
            <View style={{flex:10,backgroundColor:'blue'}}></View>
            <View style={{flex:80,backgroundColor:'cyan',flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:25,borderColor:'gray',borderWidth:25,borderRadius:25}}>
                <View style={{width:52,height:430,backgroundColor:'green',marginLeft:10}}>

                </View>
                <View style={{width:52,height:430,backgroundColor:'green',marginRight:10}}>


                </View>



            </View>
            <View style={{flex:10,backgroundColor:'blue'}}></View>

      </View>
    )
  }
}
