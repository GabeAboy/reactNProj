'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity,TextInput} from 'react-native'
import StatusBarBackground from '../../ReUsables/StatusBarBackground'
import Button from '../../ReUsables/button'

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

  <TouchableOpacity style={styles.button}onPress ={()=>this._updateServer()}>
    <Button text='signup'/>
  </TouchableOpacity>

  </View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#181c26'
  },
  textInput:{width:300,height:50,


    backgroundColor:'#353535',
    borderRadius:5,
    overflow:'hidden'
  },
  queryText:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    paddingTop:20
  },
  button:{
    paddingTop:20
  }
  ,text:{
    fontSize:40,color:'white'

  }

});
module.exports = EditPro
