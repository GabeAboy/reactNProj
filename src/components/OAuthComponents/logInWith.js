'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,Alert} from 'react-native'
import StatusBarBackground from '../ReUsables/StatusBarBackground'
import TextBoxLayout from '../ReUsables/textInput'
import Button from '../ReUsables/button'
import IconIm from 'react-native-vector-icons/Ionicons'

let wrong=[];
class SignUp extends React.Component{
constructor(props) {
  super(props);
  this.state = {name: '',
                password:'',
              };
}
_navigateToProfile(){
  this.props.navigator.push({
    indent:'Edit'
  })
}
_logIn(){


        fetch('http://localhost:3000/api/userLoginCheck', {method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          email: this.state.name,
          password:this.state.password
        })
      }).then((response)=>{if(response.status===404){

        Alert.alert('No','NOO')
      }else{
        this._navigateToProfile()
      }
    })

  .catch((error) => { console.error(error); });

}

  render(){
    return(
      <View style={styles.container}>
      <StatusBarBackground/>
          <View style={styles.top} >
              <Text style={[styles.login,styles.lineHeight]}>Sign in</Text>
              <TouchableOpacity style={styles.button}><Text style={styles.login}>SIGN IN WITH FACEBOOK</Text></TouchableOpacity>
              <Text style={styles.login}>or</Text>
          </View>

          <View style={[styles.bot]}>

            <View style={styles.sizer}>
              <View style = {styles.textInput}>
                  <View style={[styles.ImgCon,styles.space]}>
                    <IconIm name='ios-mail' color="#dae0ea" size={25} style={styles.img}/>
                  </View>
                  <TextInput style={[styles.textbla,styles.space]}  placeholderTextColor='#8e949e' placeholder='Enter Email or Username'
                  onChangeText={(name) => {
                    this.setState({name})
                  }}/>
              </View>
            </View>


            <View style={styles.sizer}>
            <View style = {styles.textInput}>
                <View style={[styles.ImgCon,styles.space]}>
                  <IconIm name='ios-lock' color="#dae0ea" size={25} style={styles.img}/>
                </View>
                <TextInput style={[styles.textbla,styles.space]} placeholderTextColor='#8e949e' placeholder='Enter Password' secureTextEntry={true}
                onChangeText={(password) => {
                  this.setState({password})
                }}/>
            </View>

            </View>

              <TouchableOpacity onPress ={()=>this._logIn(this.state.name,this.state.password)}>
                <Button text='signup'/>
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
    alignItems:'center',marginBottom:10

  },
  sizer:{width:300,height:50,marginBottom:10},
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
