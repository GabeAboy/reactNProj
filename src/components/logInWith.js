'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'

class LoginCo extends React.Component{

  render(){
    return(
<View style = {styles.container}>
        <View style = {styles.imageBox}>
          <Image source = {this.props.logType.img}
          style = {styles.icon}/>
        </View>
        <View style = {styles.TextBox}>
          <Text>{this.props.logType.text}{this.props.logType.name}</Text>
        </View>
</View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    width:270,height:60,
    flexDirection:'row',
  },
  imageBox:{
    flexDirection:'column',
    flex:2,
  },
  TextBox:{
    flex:6,
    justifyContent:'center'
  },
  icon:{
    flex:1,
    resizeMode:'cover',
    width:null,height:null
  }
})
module.exports = LoginCo
