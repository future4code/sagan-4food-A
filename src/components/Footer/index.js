import React, { Component } from 'react'
import { push } from 'connected-react-router'
import {routes} from '../../containers/Router/index'
import { connect } from 'react-redux'
import { FooterWrapper, IconsWrapper} from './styles'

function Footer(props) {
        return (
            <FooterWrapper>
                <IconsWrapper 
                onClick={props.goToHome}
                >
                <img src={require("./Images/homepage.png")} type="icon" alt="ícone clicável home"></img>
                </IconsWrapper>

                <IconsWrapper 
                // onClick={goToShoppingCart}
                >
                <img src={require("./Images/shopping-cart.png")} type="icon" alt="ícone clicável carrinho de pedidos"></img>
                </IconsWrapper>

                <IconsWrapper 
                onClick={props.goToUserProfile} 
                >
                <img src={require("./Images/avatar.png")} type="icon" alt="ícone clicável meu perfil"></img>
                </IconsWrapper>
            </FooterWrapper>
        )
}

const mapDispatchToProps = (dispatch) => ({
    // goToShoppingCart: () => dispatch (push(routes.shoppingCart)),
    goToUserProfile: () => dispatch (push(routes.myprofile)),
    goToHome: () => dispatch (push(routes.feed))
})

export default connect(null, mapDispatchToProps)(Footer)