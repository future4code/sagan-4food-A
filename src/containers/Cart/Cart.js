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

    let valorInicial = props.RestDetails.shipping;
    const somaCarrinho = props.ItensCarrinho.reduce(
        (acumulador , valorAtual) => acumulador + valorAtual.price
        ,valorInicial 
    );

    const products = props.ItensCarrinho
    let metodoAtivo = 'money'
    const preparaEnvio = (
        {
            products,
            paymentMethod: metodoAtivo
        }
    )

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
        botao: true
    });

    const handleWhitRadio = (event) => {
        if(event.target.name === 'money') {
            setValues({ ...values, money: true, creditcard: false, botao: false });
            metodoAtivo = 'money'
        } else if(event.target.name === 'creditcard') {
            setValues({ ...values, money: false, creditcard: true, botao: false });
            metodoAtivo = 'creditcard'
        }
    }
    
    return (
        <DefaultWrapper>
            <HistoryDivider showGoBack={true} head={'Meu carrinho'}/>
            <button onClick={() => {console.log(preparaEnvio)}}>log</button>
            <AddressWraper>
                <StyledTextHD>Endereço cadastrado:</StyledTextHD>
                <StyledTextHD><strong>{userData.address}</strong></StyledTextHD>
            </AddressWraper>
            {1==2? emptyCart : cartItemsRender}
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
                <StyledTextHD disabled={values.botao}>Confirmar</StyledTextHD>
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
    doSignUp: () => dispatch(push(routes.signUp))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)