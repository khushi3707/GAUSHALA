import React from 'react';
import {StatusBar} from ''

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
            <InnerContainer>
                <PageLogo resizeMode="cover" source={'require'('./../assests/img/iced-cofee.jpg')}/>
                <PageTitle> Gaushala</PageTitle> 
            </InnerContainer>
        </StyledContainer>

};
export default Login ;