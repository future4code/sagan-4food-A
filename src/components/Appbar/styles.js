import { AppBar, Toolbar, Typography } from '@material-ui/core'
import styled from 'styled-components'

// Tem que arrumar o finzinho da APPBAR, não está indo até o final.
// título Não está alinhado com  botão de voltar.

export const BoxWrapper = styled.div `
width: 175px;
height: 44px;
`

export const ToolbarStyled = styled(Toolbar)`
display: flex;
justify-content: space-between;
`

export const TitleBoxWrapper = styled.div`
 width: 175px;
 height: 44px;
`

export const TitleStyled = styled(Typography)`
  width: 45px;
  height: 19px; 
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.4px;
`

export const AppbarStyled = styled(AppBar)`
width: 360px;
height: 64px;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
background-color: #ffffff;
`



