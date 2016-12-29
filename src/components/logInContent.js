'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,TextInput} from 'react-native'
import Button from 'react-native-button'

class LoginContent extends React.Component{

  render(){
    return(
<View style = {styles.container}>
  <View style = {styles.top}>
  <TextInput
        style={{height: 40,borderWidth:2}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
      />
  </View>
  <View style = {styles.bot}>
  <Button
     style={styles.but}
     styleDisabled={{color: 'red'}}
     onPress={() => this._handlePress()}>
     Press Me!
   </Button>
  </View>
</View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  bot:{
    flex:5,
    backgroundColor:'mistyrose'
  },
  top:{
    flex:5,
    backgroundColor:'mistyrose'
  },
  but:{fontSize: 20,
      color: 'white',
      borderWidth:2,
      height:50,
      width:120,
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      borderBottomRightRadius:50,
      borderBottomLeftRadius:50,

      justifyContent:'center',
      alignItems:'center'
      }
})
module.exports = LoginContent
