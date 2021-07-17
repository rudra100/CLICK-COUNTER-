import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      buttonColor:'blue'
    };
  }
  componentDidMount() {
   //console.log('app component is mounted');
  // setInterval(this.changeColor,50000000)
  }
implimentCounter=()=>{
this.setState({
counter:this.state.counter +1
})
}
changeColor=()=>{
  var letters='0123456789ABCDEF'
  var color = '#'
  for (var i = 0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)]
  }
  this.setState({buttonColor:color})
}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ marginTop: 50, marginLeft: 170 }}>
          {this.state.counter}
        </Text>
        <Button title= 'CLICK HERE' color={this.state.buttonColor} onPress={this.implimentCounter}/>
      </View>
    );
  }
}

