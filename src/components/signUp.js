'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity,TextInput} from 'react-native'
import StatusBarBackground from './StatusBarBackground'
import TextBoxLayout from './loginComponents/textInput'
import Button from './loginComponents/button'
import IconIm from 'react-native-vector-icons/Ionicons'


class SignUp extends React.Component{
constructor(props) {
  super(props);
  this.state = {name: '',
                password:'',
                username:''};
}
_navigateToProfile(){
  this.props.navigator.push({
    indent:'Profile'
  })
}
_updateServer(){
  console.log("HEY ",this.state.name)
  console.log( JSON.stringify({
    email: this.state.name,
    username: this.state.username,
    password:this.state.password
  }));
  fetch('http://localhost:3000/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: this.state.name,
    username: this.state.username,
    password:this.state.password
  })
}).then((response)=>response.json())
  .then((responseJson)=>{
    console.log(responseJson);
    return responseJson
  }) .catch((error) => { console.error(error); });
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
              <View style = {styles.textInput}>
                  <View style={[styles.ImgCon,styles.space]}>
                    <IconIm name='ios-mail' color="#dae0ea" size={25} style={styles.img}/>
                  </View>
                  <TextInput style={[styles.textbla,styles.space]} paceholderTextColor='white' placeholder='Enter Email'
                  onChangeText={(name) => {
                    this.setState({name})
                  }}/>
              </View>
            </View>

            <View style={styles.sizer}>
            <View style = {styles.textInput}>
                <View style={[styles.ImgCon,styles.space]}>
                  <IconIm name='ios-person' color="#dae0ea" size={25} style={styles.img}/>
                </View>
                <TextInput style={[styles.textbla,styles.space]} paceholderTextColor='white' placeholder='Enter Username'
                onChangeText={(username) => {
                  this.setState({username})
                }}/>
            </View>

            </View>

            <View style={styles.sizer}>
            <View style = {styles.textInput}>
                <View style={[styles.ImgCon,styles.space]}>
                  <IconIm name='ios-lock' color="#dae0ea" size={25} style={styles.img}/>
                </View>
                <TextInput style={[styles.textbla,styles.space]} paceholderTextColor='white' placeholder='Enter Password'
                onChangeText={(password) => {
                  this.setState({password})
                }}/>
            </View>

            </View>

              <TouchableOpacity onPress ={()=>this._updateServer()}>
                <Button text='signup'/>
              </TouchableOpacity>
            <TouchableOpacity onPress={()=>this._navigateToProfile()}>
            <Text style ={{color:'white'}}>CLICK MEE</Text>
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
  },
  textInput:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#353535',
    borderRadius:5,
    overflow:'hidden'
  },
  space:{
    justifyContent:'center',
    alignItems:'center'
  },
  ImgCon:{
    flex:2

  },
  textbla:{
    flex:9,
    color:'white'

  }
})
module.exports = SignUp
