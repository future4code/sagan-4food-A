import React, {useState} from 'react';
import {connect} from "react-redux";
import {doLogin, sendNewOrder} from '../../actions/login'
import {routes} from "../Router/index";
import {push} from "connected-react-router";
import {DefaultWrapper, DivCartRestData, DivEmptyCart, DivRadios, DivRight, StyledRadio, DivSpaceBet, DivLeft, StyledTextHD, AddressWraper, StyledButton} from '../../style/styled';
import Footer from '../../components/Footer/index'
import HistoryDivider from '../../containers/HistoryDivider/HistoryDivider'
import Divider from '@material-ui/core/Divider';

function Cart(props) {
    const userData = JSON.parse(localStorage.getItem('user'))

    let valorInicial = props.RestDetails.shipping;
    const somaCarrinho = props.ItensCarrinho.reduce(
        (acumulador , valorAtual) => acumulador + valorAtual.price
        ,valorInicial 
    );

    const products = props.ItensCarrinho

    const emptyCart = (
        <DivEmptyCart>
            <StyledTextHD>Carrinho vazio</StyledTextHD>
        </DivEmptyCart>
    )
    const cartItemsRender = (
        <>
            <DivCartRestData>
                <StyledTextHD color='primary'>{props.RestDetails.name}</StyledTextHD>
                <StyledTextHD>{props.RestDetails.address}</StyledTextHD>
                <StyledTextHD>Entrega em aprox. {props.RestDetails.deliveryTime}min.</StyledTextHD>
            </DivCartRestData>
            <div>renderizacao dos itens</div>
        </>
    )
    const [values, setValues] = useState({
        money: false,
        creditcard: false,
        metodoAtivo: "",
        erroMsg: ""
    });

    const handleWhitRadio = (event) => {
        if(event.target.name === 'money') {
            setValues({ ...values, money: true, creditcard: false, metodoAtivo: 'money', erroMsg: "" });
        } else if(event.target.name === 'creditcard') {
            setValues({ ...values, money: false, creditcard: true, metodoAtivo: 'creditcard', erroMsg: "" });
        }
    }

    const handleWhitNewOrder = () => {
        const preparaEnvio = (
            {
                products,
                paymentMethod: values.metodoAtivo
            }
        )
        if(values.metodoAtivo !== '' && products) {
            props.sendNewOrder(props.RestDetails.id, preparaEnvio)
        } else {
            setValues({ ...values, erroMsg: 'Não foi possivel enviar o pedido. Certifique-se que existem produtos no carrinho e um método de pagamento selecionado.' });
            console.log('erro')
            console.log(props.RestDetails.id, preparaEnvio)
        }
        
    }
    
    return (
        <DefaultWrapper>
            <HistoryDivider showGoBack={true} head={'Meu carrinho'}/>
            {/* <button onClick={() => {console.log(preparaEnvio)}}>log</button> */}
            <AddressWraper>
                <StyledTextHD>Endereço cadastrado:</StyledTextHD>
                <StyledTextHD><strong>{userData.address}</strong></StyledTextHD>
            </AddressWraper>
            <StyledTextHD color={'error'} variant={'body1'} align={'center'}>{values.erroMsg}</StyledTextHD>
            {products ? emptyCart : cartItemsRender}
            <DivRight>
                <StyledTextHD>Frete: R${props.RestDetails.shipping && props.RestDetails.shipping.toLocaleString("pt-BR", {minimumFractionDigits: 2} )}</StyledTextHD>
            </DivRight>
            <DivSpaceBet>
                <StyledTextHD>SUBTOTAL:</StyledTextHD>
                <StyledTextHD>R${somaCarrinho && somaCarrinho.toLocaleString("pt-BR", {minimumFractionDigits: 2} )}</StyledTextHD>
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
                <StyledTextHD onClick={handleWhitNewOrder}>Confirmar</StyledTextHD>
            </StyledButton>
            <Footer />
        </DefaultWrapper>
    );
}

const mapStateToProps = state => ({
    RestDetails: state.SaveDetailInState, ItensCarrinho: state.saveAndRemoveProducts
});

const mapDispatchToProps = (dispatch) => ({
    doLogin: (inputUser, inputPass) => dispatch(doLogin(inputUser, inputPass)),
    sendNewOrder: (idRest, arrayProd) => dispatch(sendNewOrder(idRest, arrayProd)),
    doSignUp: () => dispatch(push(routes.signUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)