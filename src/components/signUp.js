'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,Alert} from 'react-native'
import StatusBarBackground from './StatusBarBackground'
import TextBoxLayout from './loginComponents/textInput'
import Button from './loginComponents/button'
import IconIm from 'react-native-vector-icons/Ionicons'

let wrong=[];
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
_updateServer(email,user,pass){
  var isValid = false;
  var isValidUser = false;
  var isValidPass = false;

    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    isValid = validateEmail(email);
    function validateLength(user){
      if(user){
        if(user.length>4)return true
      }
    }
    isValidLength = validateLength(user,pass);



console.log('1',isValidLength,'2',isValid);







  console.log('1');
  var myHeaders = new Headers();
  var myInit = { method: 'GET',
           headers: myHeaders,
           mode: 'cors',
           cache: 'default' };
      fetch('http://localhost:3000/api/readUserLogin', {myInit
    })
    .then(function(response) {
      console.log('enter blob');
        return response.blob();
})
.then(function(myBlob) {
  console.log('blob overload',myBlob);


}).catch((error)=>{console.log(error);})

  //   fetch('http://localhost:3000/api/userLogin', {method: 'POST',
  //   headers:{
  //     'Accept': 'application/json',
  //     'Content-Type':'application/json',
  //   },
  //   body: JSON.stringify({
  //     email: this.state.name,
  //     username: this.state.username,
  //     password:this.state.password
  //   })
  // }).then((response)=>{console.log('reponse ',response);})
  //    .catch((error) => { console.error(error); });

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
                  <TextInput style={[styles.textbla,styles.space]}  placeholderTextColor='#8e949e' placeholder='Enter Email'
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
                <TextInput style={[styles.textbla,styles.space]} placeholderTextColor='#8e949e' placeholder='Enter Username'
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
                <TextInput style={[styles.textbla,styles.space]} placeholderTextColor='#8e949e' placeholder='Enter Password' secureTextEntry={true}
                onChangeText={(password) => {
                  this.setState({password})
                }}/>
            </View>

            </View>

              <TouchableOpacity onPress ={()=>this._updateServer(this.state.name,this.state.username,this.state.password)}>
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
