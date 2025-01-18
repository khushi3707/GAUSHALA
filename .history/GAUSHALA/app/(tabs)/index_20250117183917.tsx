import { View, Text ,StyleSheet, ImageBackground} from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GAUSHALA</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  text: {
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',

  }
})