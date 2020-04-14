import React, {useState} from 'react';
import {connect} from "react-redux";
import {doLogin} from '../../actions/login'
import {routes} from "../Router/index";
import {push} from "connected-react-router";
import logoimg from '../../img/logo-future-eats-invert.svg'
import {LoginWrapper, LoginImg, StyledText, StyledTextField, StyledButton, StyledTextHD} from '../../style/styled'

function Login(props) {
const [inputUser, setInputUser] = useState("astrodev@future4.com");
const [inputPass, setInputPass] = useState("123456");

const handleWhithSubmit = async (event) => {
    event.preventDefault()
    await props.doLogin(inputUser, inputPass)
    setInputUser("")
    setInputPass("")
}

    return (
        <LoginWrapper>
            <LoginImg src={logoimg} class="Logo FourFoodA" />
            <StyledText variant='subtitle1'>Entrar</StyledText>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='E-mail' placeholder='email@email.com' type='email' required onChange={(event) => {setInputUser(event.target.value)}} value={inputUser}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Senha' placeholder='mínimo 6 caracteres' type='password' required onChange={(event) => {setInputPass(event.target.value)}} value={inputPass}></StyledTextField>
            <StyledButton variant='contained' type='button' onClick={handleWhithSubmit}>
                <StyledTextHD>Entrar</StyledTextHD>
            </StyledButton>
            <StyledText variant='subtitle1' onClick={props.doSignUp}>Não possui cadastro? Clique aqui.</StyledText>
        </LoginWrapper>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
    doLogin: (inputUser, inputPass) => dispatch(doLogin(inputUser, inputPass)),
    doSignUp: () => dispatch(push(routes.signUp))


})

export default connect(mapStateToProps, mapDispatchToProps)(Login)