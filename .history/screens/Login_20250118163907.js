import React from 'react';
import {StatusBar} from 'expo-status-bar';

import{
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle
}
from './../components/styles';
const Login = () => {
    return(
        <StyledContainer>
            <StatusBar styles=''
            <InnerContainer>
                <PageLogo resizeMode="cover" source={'require'('./../assests/img/iced-cofee.jpg')}/>
                <PageTitle> Gaushala</PageTitle> 
            </InnerContainer>
        </StyledContainer>

};
export default Login ;