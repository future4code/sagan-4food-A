import React from 'react';
import {StyledTextHD, PedidosContWrap, StyledTextWhite, WrapperRedPedidos, StyledAccessTimeIcon} from '../../style/styled'
import * as moment from 'moment';
import 'moment/locale/pt-br';
import Slide from '@material-ui/core/Slide';


function PedidosAbertos(props) {
    return (
        <div>
        <Slide in={true} direction='up' timeout={2000}>
            <WrapperRedPedidos>
                <div>
                    <StyledAccessTimeIcon />
                </div>
                <PedidosContWrap>
                    <StyledTextWhite variant='subtitle1' >Pedido em andamento</StyledTextWhite>
                    <StyledTextHD variant='subtitle1' >{props.restaurantName}</StyledTextHD>
                    <StyledTextHD variant='subtitle1' ><strong>SUBTOTAL R${props.totalPrice},00</strong></StyledTextHD>
                </PedidosContWrap>
            </WrapperRedPedidos>
        </Slide>
        </div>
    );
}

export default PedidosAbertos

