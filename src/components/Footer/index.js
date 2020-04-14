import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

import { FooterWrapper, HomeIconStyled, IconsWrapper, ShoppingCartIconStyled, UserIconStyled } from './styles'

class Footer extends Component {

    render() {
        return (
            <FooterWrapper>
                <IconsWrapper 
                // onClick={goToHome}
                >
                <img src={require("./Images/homepage.png")} type="icon" alt="ícone clicável home"></img>
                    {/* <HomeIconStyled color="primary"></HomeIconStyled> */}
                </IconsWrapper>

                <IconsWrapper 
                // onClick={goToShoppingCart}
                >
                <img src={require("./Images/shopping-cart.png")} type="icon" alt="ícone clicável carrinho de pedidos"></img>
                {/* <ShoppingCartIconStyled color="primary"></ShoppingCartIconStyled> */}
                </IconsWrapper>

                <IconsWrapper 
                // onClick={goToUserProfile} 
                >
                <img src={require("./Images/avatar.png")} type="icon" alt="ícone clicável meu perfil"></img>
                    {/* <UserIconStyled color="primary"></UserIconStyled> */}
                </IconsWrapper>
            </FooterWrapper>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    // goToShoppingCart: () => dispatch (push(routes.shoppingCart)),
    // goToUserProfile: () => dispatch (push(routes.userProfile)),
    // goToHome: () => dispatch (push(routes.home))
})

export default connect(null, mapDispatchToProps)(Footer)