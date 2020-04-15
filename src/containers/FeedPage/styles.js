import styled from "styled-components"
import { TextField } from '@material-ui/core'


export const ContentHomeWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
min-height: 100%;
position:relative;
margin-bottom: -50px;
`

export const TextFieldSearchStyled = styled(TextField) `
width: 328px;
height: 56px;
border-radius: 2px;
border: solid 1px #b8b8b8;
`