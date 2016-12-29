'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'

class LogInWith extends React.Component{

  render(){
    return(

<View style = {styles.container}>
<Text>You made it</Text>
</View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    width:270,height:60,
    flexDirection:'row',
  }
})
module.exports = LogInWith
