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
export const 







