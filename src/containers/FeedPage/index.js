import React, { Component } from "react"
import Footer from "../../components/Footer"
import CartRestaurant from "../CartRestaurant"
import { connect } from 'react-redux'
import { getRestaurants } from "../../actions"
import styled from "styled-components"

import { TextField } from '@material-ui/core'

const ContentHomeWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
min-height: 100%;
position:relative;
margin-bottom: -50px;
`


// RETIRAR, pois o appbar já está pronta
const Box = styled.div`
width: 100%;
height: 64px;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
background-color: #ffffff;
margin-bottom: 2vw;
  `

const TextFieldStyled = styled(TextField) `
width: 328px;
height: 56px;
border-radius: 2px;
border: solid 1px #b8b8b8;
`


class FeedPage extends Component {




    componentDidMount() {
        this.props.getRestaurants()
    }

    render() {
        console.log(this.props.restaurants)
        const { restaurants } = this.props
        return (
            <>
                <Box> </Box>

                <ContentHomeWrapper>

                <form autoComplete="on">
                    <TextFieldStyled  label="Restaurante" variant="outlined" />
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