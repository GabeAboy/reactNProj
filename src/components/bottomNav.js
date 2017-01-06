'use strict'
import React,{Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Navigator,
  TextInput} from 'react-native'
import StatusBarBackground from './StatusBarBackground';
const backDrop = require('../pics/background.jpg')

class BotNav extends React.Component{
  _navigateToLogin(){
    this.props.navigator.push({
      indent:'logInWith'
    })
  }
  _navigateToSignUp(){
    this.props.navigator.push({
      indent:'SignUp'
    })
  }
  render() {

    return (
      <Image source ={backDrop} style = {styles.container}>
        <StatusBarBackground/>

        <View style = {styles.upper}>
            <Text style = {styles.titleText}>eHub</Text>
        </View>
        <View style = {styles.lowNav}>

            <TouchableOpacity  onPress = {() => this._navigateToLogin()}underlayColor = "red"
                style = {[styles.lowNavLeft,styles.lowNavLR]}>
            <Text style = {styles.lowNavText}>LOG IN</Text>
            </TouchableOpacity>

          <TouchableOpacity  onPress = {() => this._navigateToSignUp()}underlayColor = "red"
              style = {[styles.lowNavRight,styles.lowNavLR]}>
            <Text style = {styles.lowNavText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

      </Image>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode:'stretch',
    height:null,width:null
  },
  titleText:{
    color: 'black',
    fontFamily: 'Menlo-BoldItalic',
    fontSize: 30, fontWeight: '900',
    lineHeight: 70, color:'white',
    letterSpacing:2
   },
  upper:{
    flex:9,

    alignItems:'center'
  },
  lowNav:{
    flexDirection:'row',
    flex:1
    ,backgroundColor:'black'
  },
  lowNavLeft:{
    backgroundColor:'#333634',
    flex:5
  },
  lowNavRight:{
    backgroundColor:'rgb(30,214,95)',
    flex:5
  },
  lowNavLR:{
    alignItems:'center',
    justifyContent:'center'
  },
  lowNavText:{
    fontSize:20,
    color:'white',
    letterSpacing:1,
    fontWeight:'bold'
  }
})
module.exports = BotNav
