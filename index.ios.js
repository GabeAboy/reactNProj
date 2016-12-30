/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
  AppRegistry,
  StyleSheet
} from 'react-native';


import BotNav from './src/components/bottomNav'
import LogInWith from './src/components/logInWith'
import SignUp from './src/components/signUp'
import Profile from './src/components/profile'
const fbIcon = require('./src/pics/logo/facebook.png')

class theMarket extends Component {
  _renderScene(route,navigator){
      var globalNavigatorProps = {navigator}
      switch(route.indent){
        case 'logIn':
          return(
            <BotNav
              {...globalNavigatorProps}/>
          )
        case 'logInWith':
          return(
            <LogInWith
              {...globalNavigatorProps}/>
          )
        case 'SignUp':
          return(
            <SignUp
              {...globalNavigatorProps}/>
          )
          case 'Profile':
            return(
              <Profile
                {...globalNavigatorProps}/>
            )
      }
    }


  render() {
    return (
      <Navigator
        initialRoute={{indent:"logIn"}}
        ref='appNavigator'
        style = {styles.navStyle}
        renderScene = {this._renderScene} />
    )
  }

}

const styles = StyleSheet.create({
  navStyle:{

  }
})

AppRegistry.registerComponent('theMarket', () => theMarket);
