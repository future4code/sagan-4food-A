import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {routes} from "../Router/index";
import {push} from "connected-react-router";
import logoimg from '../../img/logo-future-eats.svg'
import {StyledTextRed, StyledTextHD, CardHistoryWrap} from '../../style/styled'
import Fade from '@material-ui/core/Fade';
import * as moment from 'moment';
import 'moment/locale/pt-br';



function CardHistory(props) {
    return (
        <CardHistoryWrap>
            <StyledTextRed>{props.restaurantName}</StyledTextRed>
            <StyledTextHD>{moment(props.createdAt).format('DD MMMM YYYY')}</StyledTextHD>
            <StyledTextHD><strong>SUBTOTAL R${Math.round(props.totalPrice)},00</strong></StyledTextHD>
        </CardHistoryWrap>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CardHistory)

