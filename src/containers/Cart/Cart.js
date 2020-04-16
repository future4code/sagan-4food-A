import React, {useState} from 'react';
import {connect} from "react-redux";
import {doLogin} from '../../actions/login'
import {routes} from "../Router/index";
import {push} from "connected-react-router";
import {DefaultWrapper, DivCartRestData, DivEmptyCart, DivRadios, DivRight, StyledRadio, DivSpaceBet, DivLeft, StyledTextHD, AddressWraper, StyledButton} from '../../style/styled';
import Footer from '../../components/Footer/index'
import HistoryDivider from '../../containers/HistoryDivider/HistoryDivider'
import Divider from '@material-ui/core/Divider';

function Cart(props) {
    const userData = JSON.parse(localStorage.getItem('user'))

    const emptyCart = (
        <DivEmptyCart>
            <StyledTextHD>Carrinho vazio</StyledTextHD>
        </DivEmptyCart>
    )
    const cartItemsRender = (
        <>
            <DivCartRestData>
                <StyledTextHD color='primary'>Nome restaurante</StyledTextHD>
                <StyledTextHD>Endereço do restaurante</StyledTextHD>
                <StyledTextHD>Entrega em aprox. 00min.</StyledTextHD>
            </DivCartRestData>
            <div>renderizacao dos itens</div>
        </>
    )
    const [values, setValues] = useState({
        money: false,
        creditcard: false,
        ativo: ''
    });

    const handleWhitRadio = (event) => {
        if(event.target.name === 'money') {
            setValues({ ...values, money: true, creditcard: false, ativo: 'money' });
        } else if(event.target.name === 'creditcard') {
            setValues({ ...values, money: false, creditcard: true, ativo: 'creditcard' });
        }
    }

    return (
        <DefaultWrapper>
            <HistoryDivider showGoBack={true} head={'Meu carrinho'}/>
            <AddressWraper>
                <StyledTextHD>Endereço cadastrado:</StyledTextHD>
                <StyledTextHD><strong>{userData.address}</strong></StyledTextHD>
            </AddressWraper>
            {1==2? emptyCart : cartItemsRender}
            <DivRight>
                <StyledTextHD>Frete: R$00,00</StyledTextHD>
            </DivRight>
            <DivSpaceBet>
                <StyledTextHD>SUBTOTAL:</StyledTextHD>
                <StyledTextHD>R$000,00</StyledTextHD>
            </DivSpaceBet>
            <DivLeft>
                <StyledTextHD>Forma de pagamento</StyledTextHD>
                <Divider />
                <DivRadios>
                    <StyledRadio value='money' name='money' checked={values.money} onChange={handleWhitRadio}/>
                    <StyledTextHD>Dinheiro</StyledTextHD>
                </DivRadios>
                <DivRadios>
                    <StyledRadio value='creditcard' name='creditcard' checked={values.creditcard} onChange={handleWhitRadio} />
                    <StyledTextHD>Cartão de crédito</StyledTextHD>                   
                </DivRadios>
            </DivLeft>
            <StyledButton>
                <StyledTextHD>Confirmar</StyledTextHD>
            </StyledButton>
            <Footer />
        </DefaultWrapper>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
    doLogin: (inputUser, inputPass) => dispatch(doLogin(inputUser, inputPass)),
    doSignUp: () => dispatch(push(routes.signUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)