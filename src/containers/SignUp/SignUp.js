import React, {useState} from 'react';
import {connect} from "react-redux";
import {doSignUp} from '../../actions/login'
import logoimg from '../../img/logo-future-eats-invert.svg'
import HistoryDivider from '../HistoryDivider/HistoryDivider'
import {LoginWrapper, LoginImg, StyledText, StyledTextField, StyledButton, StyledTextHD} from '../../style/styled'


function SignUp(props) {
const [inputNome, setInputNome] = useState("");
const [inputEmail, setInputEmail] = useState("");
const [inputCpf, setInputCpf] = useState("");
const [inputPass, setInputPass] = useState("");
const [inputPassc, setInputPassc] = useState("");

const [helpterTextPassc, sethelpterTextPassc] = useState("");
const [passcError, setpasscError] = useState(false);

const handleWhithSubmit = async (event) => {
    if(inputPass != inputPassc){
        sethelpterTextPassc("as senhas não coincidem");
        setpasscError(true);    
    } else {
    event.preventDefault()
    await props.doSignUp(inputNome, inputEmail, inputCpf, inputPass)
    }
}

    return (
        <LoginWrapper>
            <HistoryDivider/>
            <LoginImg src={logoimg} class="Logo FourFoodA" />
            <StyledText variant='subtitle1'>Cadastrar</StyledText>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Nome' placeholder='Nome e sobrenome' type='text' required onChange={(event) => {setInputNome(event.target.value)}} value={inputNome}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='E-mail' placeholder='email@email.com' type='email' required onChange={(event) => {setInputEmail(event.target.value)}} value={inputEmail}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='CPF' placeholder='000.000.000-00' type='number' required onChange={(event) => {setInputCpf(event.target.value)}} value={inputCpf}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" label='Senha' placeholder='mínimo 6 caracteres' type='password' required onChange={(event) => {setInputPass(event.target.value)}} value={inputPass}></StyledTextField>
            <StyledTextField InputLabelProps={{ shrink: true }} variant="outlined" error={passcError} helperText={helpterTextPassc} label='confirmar' placeholder='Confirme a senha anterior' type='password' required onChange={(event) => {setInputPassc(event.target.value)}} value={inputPassc}></StyledTextField>
            <StyledButton variant='contained' type='button' onClick={handleWhithSubmit}>
            <StyledTextHD>Criar</StyledTextHD>
            </StyledButton>
        </LoginWrapper>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch) => ({
    doSignUp: (inputNome, inputEmail, inputCpf, inputPass) => dispatch(doSignUp(inputNome, inputEmail, inputCpf, inputPass)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)