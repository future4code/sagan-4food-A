import React, { Component } from 'react'

import { CardContent } from '@material-ui/core'
import { CardWrapper, CardActionWrapper, CardMediaStyled, InfosRestaurantWrapper, RestaurantName, DeliveryTimeStyled, ShippingStyled } from './styles'


class CartRestaurant extends Component {

    render() {
        return (

            <CardWrapper>
                <CardActionWrapper onClick={this.props}>
                    {/* inserir detalhe do restaurante com endereço. ^^ */}
                    <CardMediaStyled component="img" src={this.props.image} />
                    <CardContent>
                        <RestaurantName variant="h5" component="h2">{this.props.name}</RestaurantName>
                        <InfosRestaurantWrapper>
                            <DeliveryTimeStyled variant="h6" component="h2">{this.props.deliveryTime} min </DeliveryTimeStyled>
                            <ShippingStyled variant="h6" component="h2">Frete R${this.props.shipping} </ShippingStyled>
                        </InfosRestaurantWrapper>
                    </CardContent>
                </CardActionWrapper>
            </CardWrapper>

        )
    }
}

export default CartRestaurant