import { View, Text ,StyleSheet, ImageBackground} from 'react-native'
import React from 'react'

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
  i
  text: {
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',

  }
})