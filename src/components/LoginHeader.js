'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'

class LoginHeader extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.left}></View>
        <View style = {styles.mid}></View>
        <View style = {styles.right}></View>
      </View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    flexDirection:'row',
    flex:1,
    backgroundColor:'white'
  },
  left:{
      flex:2
  },
  mid:{
    flex:6
  },
  right:{
    flex:2,
  }

})
module.exports = LoginHeader
