import styled from 'styled-components';
import {PixelRatio, View} from 'react-native';
export const Colors ={
    primary: "#ffffff",
    secondary:"#E5E7EB",
    tertiary: '#1F2937',
    darkLight:'#9CA3AF',
    brand:'#6D28D9',
    green:'#10B981',
    red:'#EF4444',
};
const { primary, secondary, tertiary, darkLight, brand, green, red} = Colors;
export const StyledContainer = styled.View
'flex: 1;
padding: 25 px;
padding-top: ${StatusBarHeigth+10} px
background-color: ${primary};




