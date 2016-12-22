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


import StatusBarBackground from './src/components/StatusBarBackground'

class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  };

class BackgroundImage extends Component{
  render(){
    return(
      <Image source={require('./src/pics/mnt.jpg')} style = {styles.imageBackGround}>
        {this.props.children}
      </Image>
    )
  }
}
export default class theMarket extends Component {
  render() {
    return (
      <View style = {styles.container}>
      <StatusBarBackground/>
        <BackgroundImage>
          <View style = {styles.topCont}>
            <View style = {[styles.connectBox,styles.linkedin]}>
                <View style = {styles.lButton}>
                  <Image style={styles.imgSize} source={require('./src/pics/logo/linkedin.png')}/>
                </View>
                <View style = {styles.butt}>
                  <Text style = {styles.textAl}>Connect with linkedin</Text>
                </View>
            </View>

            <View style = {[styles.connectBox,styles.github]}>
                <View style = {styles.lButton}>
                  <Image style={styles.imgSize} source={require('./src/pics/logo/github-logo.png')}/>
                </View>
                <View style = {styles.butt}>
                  <Text style = {styles.textAl}>Connect with github</Text>
              </View>
            </View>

            <View style = {[styles.connectBox,styles.facebook]}>
                <View style = {styles.lButton}>
                  <Image style={styles.imgSize} source={require('./src/pics/logo/facebook.png')}/>
                </View>
                <View style = {styles.butt}>
                  <Text style = {styles.textAl}>Connect with facebook</Text>
                </View>
            </View>

          </View>



          <View style = {styles.botCont}>

          </View>


        </BackgroundImage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackGround:{
    flex:1,
    alignSelf:'stretch',
    width:null,height:null
  },
  textAl:{
    color:'#F0F8FF',
    fontSize:20,

  },
  imgSize:{
    width:45,height:45

  },
  connectBox:{
    width:300,
    flexDirection:'row'

  },
  butt:{
    flexDirection:'row',
    alignItems:'center'

  },

  topCont:{
    flex:5,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#CC0000'
  },


  botCont:{
    flex:5,
    backgroundColor:'#0000CC'
  },
  linkedin:{
    backgroundColor:'#0077B5',
    flexDirection:'row',

  },
  facebook:{
    backgroundColor:'#71a5ed'
  },
  github:{
    backgroundColor:'#3a4a6b'
  }

});

AppRegistry.registerComponent('theMarket', () => theMarket);
