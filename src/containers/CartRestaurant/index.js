import React, { Component } from 'react'
import { getRestaurantDetail } from "../../actions/RestaurantDetail";
import { connect } from "react-redux";
import {routes} from "../Router/index";
import {push} from "connected-react-router";
import { CardContent } from '@material-ui/core'
import { CardWrapper, CardActionWrapper, CardMediaStyled, InfosRestaurantWrapper, RestaurantName, DeliveryTimeStyled, ShippingStyled } from './styles'


class CartRestaurant extends Component {

    render() {
        const handleWhitClick = () => {
            this.props.getRestaurantDetail(this.props.id)
            this.props.goToRestaurantDetails()
        }
        return (
            <CardWrapper>
                <CardActionWrapper onClick={handleWhitClick}>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
return {
    getRestaurantDetail: (id) => dispatch(getRestaurantDetail(id)),
    goToRestaurantDetails: () => dispatch(push(routes.RestaurantDetailPage))
};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartRestaurant);
