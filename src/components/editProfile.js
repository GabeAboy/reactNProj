'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity,TextInput} from 'react-native'
import StatusBarBackground from './StatusBarBackground'

class EditPro extends React.Component{
  constructor(props) {
    super(props);
    this.state = {name: '',
                  work:'',
                  occupation:'',
                  skills:[]
                };
  }
_navigateToProfile(){
  this.props.navigator.push({
    indent:'Profile'
  })
}
_updateServer(){


          fetch('http://localhost:3000/api/userProfile', {method: 'POST',
          headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json',
          },
          body: JSON.stringify({
            email: this.state.name,
            work:this.state.work,
            occupation:this.state.occupation,
            skills:this.state.skills


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

  <View style = {styles.container}>
  <StatusBarBackground/>
  <Text style={styles.text}>Welcome, please edit</Text>

  <Text style={styles.queryText}>What is your name?</Text>
  <TextInput style={styles.textInput} placeholder='Enter text'onChangeText={(name) => {
    this.setState({name})
  }}/>

  <Text style={styles.queryText}>Where do you work?</Text>
  <TextInput style={styles.textInput} placeholder='Enter text'onChangeText={(work) => {
    this.setState({work})
  }}/>

  <Text style={styles.queryText}>What is your occupation?</Text>
  <TextInput style={styles.textInput} placeholder='Enter text'onChangeText={(occupation) => {
    this.setState({occupation})
  }}/>

  <Text style={styles.queryText}>What are your skills? separete comma</Text>
  <TextInput style={styles.textInput} placeholder='Enter text'onChangeText={(skills) => {
    this.setState({skills});
  }}/>

  <TouchableOpacity onPress = {()=>this._updateServer()} style = {styles.button}><Text>Submit</Text></TouchableOpacity>

  </View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#181c26'
  },
  textInput:{flex:1,
    backgroundColor:'gray'
  },
  queryText:{
    backgroundColor:'white'
  },
  button:{
    flex:1,backgroundColor:'red'
  }


});
module.exports = EditPro
