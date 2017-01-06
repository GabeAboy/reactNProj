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
    width:120,height:45,
    backgroundColor:'rgb(30,214,95)',
    flexDirection:'row',
    borderRadius:25,
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center'

  },
  textBox:{
  color:'white',
  fontSize:20,fontWeight:'500'

  }

})
module.exports = Button
