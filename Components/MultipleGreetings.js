import React, { Component } from 'react';
import {Text,View} from 'react-native';

 class Greetings extends Component {
  render() {
    return (
     
            <Text> This is ${this.props.name} Welcome you</Text>        
      
    )
  }
}


export default class MultipleGreetings extends Component {
  render() {
    return (
      <View style={{alignItems:'center'}}>

            <Greetings name="Mangesh"> </Greetings>
            <Greetings name="Engineer"></Greetings>


      </View>
            


      
    )
  }
}

