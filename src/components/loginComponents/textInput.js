'use strict'
import React,{Component} from 'react'
import {View,StyleSheet,TextInput,Text} from 'react-native'
import IconIm from 'react-native-vector-icons/Ionicons'
class TextBoxLayout extends React.Component{
  render(){
    return(
      <View style = {styles.textInput}>



          <View style={[styles.ImgCon,styles.space]}>
            <IconIm name={this.props.img} color="#4F8EF7" size={30} style={styles.img}/>
          </View>

          <TextInput style={[styles.textbla,styles.space]} paceholderTextColor='white' placeholder={this.props.text}/>



      </View>
    )
  }
}
const styles = StyleSheet.create({

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
module.exports = TextBoxLayout
