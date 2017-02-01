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


import LandingPage from './src/components/LandingPage'
import LogInWith from './src/components/OAuthComponents/logInWith'
import SignUp from './src/components/OAuthComponents/signUp'
import Profile from './src/components/OAuthComponents/ProfileComp/profile'
import EditPro from './src/components/OAuthComponents/ProfileComp/editProfile'
import Navigatord from './src/components/OAuthComponents/ProfileComp/navigator'
const fbIcon = require('./src/pics/logo/facebook.png')
var SQLite = require('react-native-sqlite-storage')

class theMarket extends Component {

  _renderScene(route,navigator){
      var globalNavigatorProps = {navigator}
      switch(route.indent){
        case 'LandingPage':
          return(
            <LandingPage
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
            case 'Nav':
              return(
                <Navigatord
                  {...globalNavigatorProps}/>
              )
              case 'Edit':
                return(
                  <EditPro
                    {...globalNavigatorProps}/>
                )
      }
    }


  render() {
    return (
      <Navigator
        initialRoute={{indent:"LandingPage"}}
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
