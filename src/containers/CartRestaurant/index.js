import React, { Component } from 'react'
import styled from 'styled-components'
import { CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'



const CardWrapper = styled.div`
  background-color: none;
  width: 360px;
  height: 196px;
  display: flex;
  align-items:center;
  justify-content: center;
`

const CardActionWrapper = styled(CardActionArea)`
  width: 328px;
  height: 188px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`

const CardMediaStyled = styled(CardMedia)`
  width: 328px;
  height: 120px;
  
`
const InfosRestaurantWrapper = styled.div`
display: flex;
flex-direction: row;
`

const RestaurantName = styled(Typography)`
  width: 296px;
  height: 18px;
  color: #e8222e;
  margin-bottom: 2vw;
`

const DeliveryTimeStyled = styled(Typography)`
  width: 148px;
  height: 18px;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: left;
  color: #b8b8b8;
`

const ShippingStyled = styled(Typography)`
  width: 140px;
  height: 18px;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: right;
  color: #b8b8b8;
`

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