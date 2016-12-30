'use strict'
import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'

class textInput extends React.Component{
  render(){
    return(
      <View style = {styles.textInput}>

      </View>
    )
  }
}
const styles = StyleSheet.create({

  textInput:{
    height:20,
    alignSelf:'stretch',
    backgroundColor:'white'
  }

})
module.exports = textInput
