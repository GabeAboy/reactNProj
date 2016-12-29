/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput
} from 'react-native';

import StatusBarBackground from './src/components/StatusBarBackground';
import Title from './src/components/title';
import LoginHeader from './src/components/LoginHeader';
import LoginCo from './src/components/logInWith';
import LoginContent from './src/components/logInContent';
const fbIcon = require('./src/pics/logo/facebook.png')
const lnIcon = require('./src/pics/logo/linkedin.png')
const gitIcon = require('./src/pics/logo/github-logo.png')

const welcome = 'Connect using '
const logObj = {
    fb:{
      img:fbIcon,
      text:welcome,
      name:'Facebook'
    },
    ln:{
      img:lnIcon,
      text:welcome,
      name:'Linkedin'
    },
    git:{
      img:gitIcon,
      text:welcome,
      name:'Github'
    }
}
class theMarket extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <StatusBarBackground/>

        <View style={[styles.header,styles.background]}>
          <LoginHeader/>
        </View>
        <View style = {[styles.loginBox,styles.background]}>
          <LoginCo logType ={logObj.fb}  />
          <LoginCo logType ={logObj.ln}  />
          <LoginCo logType ={logObj.git}  />
        </View>


        <View style = {[styles.submitBox,styles.background]}>
          <LoginContent/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header:{
    flex:1,
  },
  background:{
    backgroundColor:'mistyrose'
  },
  loginBox:{
            flex:3,
            alignItems:'center',
            justifyContent:'center'},
  submitBox:{
    flex:5
  }
})

AppRegistry.registerComponent('theMarket', () => theMarket);
