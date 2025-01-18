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
import styles from 'styled-components';
import { View,Text,Image} from 'react-native';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;
export const Colors ={
    primary: '#ffffff',
    secondary: '#ESE7EB',
    tertiary:'#1F2937',
    darkLight:'#9CA3AF',
    brand:'#6D28D9',
    green:'#10B981',
    red: '#EF4444'

};
const {primary,secondary,tertiary,darkLight,brand,green,red}=Colors;
export const StyledContainer = styled.View
flex:'1',
padding: 25px;
padding-top: $(StatusBarHeight +10)px;
background-color: ${primary};
';
export const InnerContainer=styled.View
flex:1;
width: 100%
align-items: center;
';
export const PageTitle=styled.Text
font-size:30px;
text-align: center;
font-weight:bold ;
color:$(brand);
padding:10px ;
';
export const PageLogo=styles.Image
width: 250 px;
height:200 px;
';









