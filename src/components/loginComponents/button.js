'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
class Button extends React.Component{
  render(){
    return(
      <View style={styles.box}>
        <Text style={styles.textBox}>{this.props.text}</Text>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  box:{
    width:150,height:60,
    backgroundColor:'#84bd00',
    flexDirection:'row',
    borderRadius:25,
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center'

  },
  textBox:{
  color:'white'

  }

})
module.exports = Button
