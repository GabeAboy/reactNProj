'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,TextInput} from 'react-native'
class AddSkill extends React.Component{
  render(){
    return(
      <View style={styles.box}>

        <View style={styles.text}>

        </View>

        <View style={styles.add}>

        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  box:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'orange'

  },
  textInput:{height:40,
            width:100,
            justifyContent:'center',
            alignItems:'center'},
  text:{flex:5,backgroundColor:'blue'},
  add:{flex:5,backgroundColor:'red'}

})
module.exports = AddSkill
