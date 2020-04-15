import React, { Component } from "react"
import Footer from "../../components/Footer"
import CartRestaurant from "../CartRestaurant"
import { connect } from 'react-redux'
import { getRestaurants } from "../../actions"

import { ContentHomeWrapper, TextFieldSearchStyled} from './styles'


class FeedPage extends Component {




    componentDidMount() {
        this.props.getRestaurants()
    }

    render() {
        console.log(this.props.restaurants)
        const { restaurants } = this.props
        return (
            <>


                <ContentHomeWrapper>

                <form autoComplete="on">
                    <TextFieldSearchStyled  label="Restaurante" variant="outlined" />
                </form>

                        {/* FALTA MENU COM SCROLL LATERAL */}
                
                    {restaurants.map(restaurants => {
                        return (
                            <CartRestaurant
                                image={restaurants.logoUrl}
                                name={restaurants.name}
                                deliveryTime={restaurants.deliveryTime}
                                shipping={restaurants.shipping}
                            />
                        )
                    })}
                </ContentHomeWrapper>
                <Footer />


            </>
        )
    }
}

const mapStateToProps = (state) => ({
    restaurants: state.restaurants
})

const mapDispatchToProps = (dispatch) => ({
    getRestaurants: () => dispatch(getRestaurants())
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)