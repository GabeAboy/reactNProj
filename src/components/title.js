'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'

class Title extends React.Component{
  render(){
    return(
      <View style = {styles.statusBarBackground}>
        <Text>hi</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({

  statusBarBackground:{
    height:20,
    width:20,
    backgroundColor:'white'
  }

})
module.exports = Title
