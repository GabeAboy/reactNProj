'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,Image,Text,TouchableOpacity} from 'react-native'
import StatusBarBackground from './StatusBarBackground'
import IconIm from 'react-native-vector-icons/Ionicons'
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
      <View style={styles.mid}><View style={styles.accImg}></View></View>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={()=>this._navigateToNav()}>
            <IconIm name='ios-pin' color="#dae0ea" size={40}/>
        </TouchableOpacity>
      </View>
    </View>
    <View style = {styles.userInfo}>


        <View style={styles.accData}>

        </View>
    </View>
  </View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    flex:1,

  },
  header:{
    flex:1,

    flexDirection:'row'
  },
  userInfo:{
    flex:9,
    backgroundColor:'gray'

  },
  headerRight:{
    flex:3
    ,justifyContent:'center',alignItems:'center'
  },
  headerLeft:{
    flex:3,
  },
  mid:{
    flex:4,
    justifyContent:'center',
    alignItems:'center'
  },
  accImg:{borderWidth:2,
    borderColor:'black',
    height:80,width:80,
    borderRadius:50,
    top:20
  },
  accData:{
    flex:1,
    alignItems:'center',
    position:'relative',
    backgroundColor:'red'
  }
})
module.exports = Profile
