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

class BotNav extends React.Component{
  _navigateToLogin(){
    this.props.navigator.push({
      indent:'logInWith'
    })
  }
  render() {
    console.log('This is the nav',this.props.navigator);

    return (
      <View style = {styles.container}>
        <StatusBarBackground/>

        <View style = {styles.upper}>
            <Text style = {styles.titleText}>LinkedTogether</Text>
        </View>
        <View style = {styles.lowNav}>

            <TouchableOpacity  onPress = {() => this._navigateToLogin()}underlayColor = "red"
                style = {[styles.lowNavLeft,styles.lowNavLR]}>
            <Text style = {styles.lowNavText}>LOG IN</Text>
            </TouchableOpacity>

          <TouchableOpacity  onPress = {() => this.onPressfu()}underlayColor = "red"
              style = {[styles.lowNavRight,styles.lowNavLR]}>
            <Text style = {styles.lowNavText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleText:{
    color: 'black',
    fontFamily: 'Menlo-BoldItalic',
    fontSize: 30, fontWeight: 'bold',
     lineHeight: 48
   },
  upper:{
    flex:9,
    backgroundColor:'mistyrose'
  },
  lowNav:{
    flexDirection:'row',
    flex:1
  },
  lowNavLeft:{
    backgroundColor:'gray',
    flex:5
  },
  lowNavRight:{
    backgroundColor:'green',
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
