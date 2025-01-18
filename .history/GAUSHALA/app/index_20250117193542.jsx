import { View, Text ,StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

import icedCofeeImg from "@/assets/images/iced-cofee.jpg"

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={icedCofeeImg}
      resizeMode='cover'
      style={styles.image}
      >
      <Text style={styles.text}>GAUSHALA</Text>
      <Link
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
  },
  text: {
    color:'red',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
  }
})