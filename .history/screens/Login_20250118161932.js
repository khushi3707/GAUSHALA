import React from 'react';

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
                <PageLogo resizeMode source={'require'('./../assests/img/iced-cofee.jpg')}/>
            </InnerContainer>
        </StyledContainer>

}
export default Login ;