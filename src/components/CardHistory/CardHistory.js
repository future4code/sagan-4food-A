import React from 'react';
import {StyledTextRed, StyledTextHD, CardHistoryWrap} from '../../style/styled'
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

export default CardHistory

