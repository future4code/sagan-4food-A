import React, { Component } from 'react'

import { FooterWrapper, HomeIconStyled, IconsWrapper, ShoppingCartIconStyled, UserIconStyled} from './styles'
class Footer extends Component {

    render() {
        return (
            <FooterWrapper>
                <IconsWrapper>
                <img src={require("./Images/homepage.png")} type="icon" alt="ícone clicável home"></img>
                    {/* <HomeIconStyled color="primary"></HomeIconStyled> */}
                </IconsWrapper>

                <IconsWrapper>
                <img src={require("./Images/shopping-cart.png")} type="icon" alt="ícone clicável carrinho de pedidos"></img>
                {/* <ShoppingCartIconStyled color="primary"></ShoppingCartIconStyled> */}
                </IconsWrapper>

                <IconsWrapper>
                <img src={require("./Images/avatar.png")} type="icon" alt="ícone clicável meu perfil"></img>
                    {/* <UserIconStyled color="primary"></UserIconStyled> */}
                </IconsWrapper>
            </FooterWrapper>
        )
    }
}

export default Footer