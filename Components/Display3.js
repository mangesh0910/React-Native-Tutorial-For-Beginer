import React, { Component } from 'react'
import {Text,View} from 'react-native'


class Blink extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       showText:true
    };
    var taskToDo = () =>{
        this.setState(previousState =>{
            return{
            showText:!previousState.showText
            };
        });
    };
    const timeToBlink = 300;
    setInterval(taskToDo,timeToBlink)
  }
  
    render() {
        let textToDisplay = this.state.showText ? this.props.inputText:''
    return (
        <Text style={{fontSize:56}}>{textToDisplay}</Text>
    )
  }
}
export default class Display3 extends Component {
  
    render() {
        return (
            <View>
                <Blink inputText='Welcome To RMCET'></Blink>
            </View>
        )
    }
}
