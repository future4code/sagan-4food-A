import styled from 'styled-components'
import TextField from "@material-ui/core/TextField";
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import OutlinedInput from "@material-ui/core/OutlinedInput";

export const LoginWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`
export const StyledForm = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const LoginImg = styled.img`
margin: 15px 128px 0px 128px;
`
export const StyledText = styled(Typography)`
margin-top: 26px;
`
export const StyledTextField = styled(TextField)`
width: 328px;
height: 56px;
border-radius: 1px;
margin-top: 8px;
margin-bottom: 8px;
`
export const StyledButton = styled(Button)`
width: 328px;
height: 42px;
border-radius: 2px;
background-color: #e8222e;
font-size: 16px;
font-family: 'Roboto';
margin-top: 16px;
margin-bottom: 8px;
`
export const StyledTextHD = styled(Typography)`
`

export const HDWrapper = styled.div`
width: 100vw;
`
export const HDWrapperCont = styled.div`
display: flex;
align-items: center;
justify-content: left;
padding: 5px;
`
export const HDWrapperCenter = styled.div`
align-self: center;
text-align: center;
width: 85%;
`
export const WrapperRed = styled.div`
background-color: #e8222e;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
`

export const StyledOutlinedInput = styled(OutlinedInput)`
width: 328px;
height: 56px;
border-radius: 1px;
margin-top: 8px;
margin-bottom: 8px;
`