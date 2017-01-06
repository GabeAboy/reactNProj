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
    indent:'nav'
  })
}
  render(){
    return(

  <View style = {styles.container}>
  <StatusBarBackground/>



    <View style = {styles.header}>
      <View style={styles.headerLeft}></View>
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
    flex:1
  },
  sizer:{width:120,height:50},
  staticUser:{
    flex:1,alignItems:'center'
  },
  header:{
    flex:1,
    position:'relative',
    flexDirection:'row',
    zIndex:10
  },
  userInfo:{
    flex:7,
    flexDirection:'row'

  },
  headerRight:{
    flex:3
    ,justifyContent:'center',alignItems:'center'
  },
  headerLeft:{
    flex:3
  },
  mid:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',

  },
  accImg:{borderWidth:2,
    borderColor:'black',
    height:120,width:120,
    borderRadius:60,top:32
      },
  spaceBet:{
    flex:1
  },
  leftCol:{
    flex:5,justifyContent:'space-between',alignItems:'center'

  },
  rightCol:{
    flex:5,justifyContent:'space-between',alignItems:'center'

  }
})
module.exports = Profile
