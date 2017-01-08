'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity,TextInput} from 'react-native'
import StatusBarBackground from './StatusBarBackground'
import IconIm from 'react-native-vector-icons/Ionicons'
import SkillBox from './loginComponents/addSkill'
import TextBoxLayout from './loginComponents/textInput'
class Profile extends React.Component{
_navigateToNav(){
  this.props.navigator.push({
    indent:'Nav'
  })
}
_updateServer(){

}
  render(){
    return(

  <View style = {styles.container}>
  <StatusBarBackground/>



    <View style = {styles.header}>
      <View style={styles.headerLeft}>
      <TouchableOpacity onPress={()=>this._updateServer()}>
          <IconIm name='md-checkmark-circle' color="#dae0ea" size={40}/>
      </TouchableOpacity>
      </View>
      <View style={styles.mid}>
          <View style={styles.accImg}></View>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={()=>this._navigateToNav()}>
            <IconIm name='ios-pin' color="#dae0ea" size={40}/>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.spaceBet}>
    </View>
    <View style={styles.staticUser}>
        <Text>NAME</Text>
        <Text>Software Engineer</Text>
    </View>



    <View style = {styles.userInfo}>
      <View style ={styles.leftCol}>

        <View style={styles.sizer}>
          <TextBoxLayout img ='md-add' text='Add skill'/>
        </View>
        <View style={styles.sizer}>
          <TextBoxLayout img ='md-add' text='Add skill'/>
        </View>
        <View style={styles.sizer}>
          <TextBoxLayout img ='md-add' text='Add skill'/>
        </View>
        <View style={styles.sizer}>
          <TextBoxLayout img ='md-add' text='Add skill'/>
        </View>

      </View>
      <View style ={styles.rightCol}>
      <View style={styles.sizer}>
        <TextBoxLayout img ='md-add' text='Add skill'/>
      </View>
      <View style={styles.sizer}>
        <TextBoxLayout img ='md-add' text='Add skill'/>
      </View>
      <View style={styles.sizer}>
        <TextBoxLayout img ='md-add' text='Add skill'/>
      </View>
      <View style={styles.sizer}>
        <TextBoxLayout img ='md-add' text='Add skill'/>
      </View>
      </View>

    </View>

  </View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#181c26'
  },
  sizer:{width:120,height:50},
  staticUser:{
    flex:1,alignItems:'center',backgroundColor:'#dae0ea',
    marginLeft:20,marginRight:20
  },
  header:{
    flex:1,
    position:'relative',
    flexDirection:'row',
    zIndex:10
  },
  userInfo:{
    flex:7,
    flexDirection:'row',marginLeft:20,marginRight:20
    ,backgroundColor:'#dae0ea',marginBottom:20

  },
  headerRight:{
    flex:3
    ,justifyContent:'center',alignItems:'center'
  },
  headerLeft:{
    flex:3,justifyContent:'center',alignItems:'center'
  },
  mid:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',

  },
  accImg:{borderWidth:2,
    borderColor:'black',
    height:120,width:120,
    borderRadius:60,top:32,backgroundColor:'mistyrose'
      },
  spaceBet:{
    flex:1,backgroundColor:'#dae0ea',marginLeft:20,marginRight:20,
    borderTopLeftRadius:20,borderTopRightRadius:20
  },
  leftCol:{
    flex:5,justifyContent:'space-between',alignItems:'center'

  },
  rightCol:{
    flex:5,justifyContent:'space-between',alignItems:'center'

  }
})
module.exports = Profile
