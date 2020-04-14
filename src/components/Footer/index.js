import React, { Component } from 'react'

import { FooterWrapper, HomeIconStyled, IconsWrapper, ShoppingCartIconStyled, UserIconStyled} from './styles'
class Footer extends Component {

    render() {
        return (
            <FooterWrapper>
                <IconsWrapper>
                    <HomeIconStyled color="primary"></HomeIconStyled>
                </IconsWrapper>

                <IconsWrapper>
                    <ShoppingCartIconStyled color="primary"></ShoppingCartIconStyled>
                </IconsWrapper>

                <IconsWrapper>
                    <UserIconStyled color="primary"></UserIconStyled>
                </IconsWrapper>
            </FooterWrapper>
        )
    }
}

export default Footer