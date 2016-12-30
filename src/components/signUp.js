'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import StatusBarBackground from './StatusBarBackground'
class SignUp extends React.Component{

  render(){
    return(

<View style = {styles.container}>
<StatusBarBackground/>
  <Text style={styles.title}>Sign up</Text>
  <View style = {styles.fb}>
    <Text style = {styles.title}>SIGN UP WITH FACEBOOK</Text>
  </View>
  <Text>or with email</Text>


</View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'black'
  },
  title:{
    color:'white',
    fontSize:20
  },
  fb:{
    backgroundColor:'blue',
    width:300,
    height:40,
    borderRadius:20,
    overflow:'hidden',
    alignItems:'center',
    justifyContent:'center'
  }
})
module.exports = SignUp
