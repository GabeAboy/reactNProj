'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import StatusBarBackground from './StatusBarBackground'
import TextBoxLayout from './loginComponents/textInput'
import Button from './loginComponents/button'
class SignUp extends React.Component{
_navigateToProfile(){
  this.props.navigator.push({
    indent:'Profile'
  })
}
  render(){
    return(

      <View style={styles.container}>
      <StatusBarBackground/>
          <View style={styles.top} >
              <Text style={[styles.login,styles.lineHeight]}>Sign up</Text>
              <TouchableOpacity style={styles.button}><Text style={styles.login}>SIGN UP WITH FACEBOOK</Text></TouchableOpacity>
              <Text style={styles.login}>or</Text>
          </View>

          <View style={[styles.bot]}>
            <View style={styles.sizer}>
              <TextBoxLayout img = 'ios-mail' text ='Enter Email'/>
            </View>
            <View style={styles.sizer}>
              <TextBoxLayout img = 'ios-lock' text ='Enter Password'/>
            </View>
            <View style={styles.sizer}>
              <TextBoxLayout img = 'ios-person' text ='Enter Username'/>
            </View>
            <TouchableOpacity onPress={()=>this._navigateToProfile()}>
              <Button text="SIGN UP"/>
            </TouchableOpacity>
          </View>

        </View>

    )
  }
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    backgroundColor: '#181c26'
  },
  top:{
    flex:2,
    justifyContent:'space-between',
    flexDirection:'column',
    alignItems:'center',

  },
  sizer:{width:300,height:50},
  bot:{
    flex:7,
    flexDirection:'column',
    alignItems:'center'


  },
  lineHeight:{
    lineHeight:60
  },
  button:{
    width:300,
    height:50,
    backgroundColor:'#3B5998',
    overflow:'hidden',
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  login:{
    fontSize:20,fontWeight:'500',color:"#f7f7f7"
    ,fontFamily:'AvenirNextCondensed-Heavy'
  },
  input:{
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:10,
    overflow:'hidden'


  },
  imgCon:{

    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue',
    width:200
  },
  textInput:{
    flex:7,
    backgroundColor:'#353535'
  }
})
module.exports = SignUp
