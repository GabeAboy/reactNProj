'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'
import StatusBarBackground from './StatusBarBackground'
class Profile extends React.Component{

  render(){
    return(

<View style = {styles.container}>
<StatusBarBackground/>
  <Text>PROFILE</Text>
</View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'black'
  }
})
module.exports = Profile
