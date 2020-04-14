import styled from 'styled-components'

import { } from '@material-ui/core'
import { HomeOutlined, ShoppingCartOutlined, PersonOutlineOutlined } from '@material-ui/icons'

export const FooterWrapper = styled.div`
width: 360px;
height: 64px;
display: flex;
flex-direction: row;
`

export const HomeIconStyled = styled(HomeOutlined)`
width: 27px;
height: 27px;
object-fit: contain;
`
export const ShoppingCartIconStyled = styled(ShoppingCartOutlined)`
width: 27px;
height: 27px;
object-fit: contain;
`

export const UserIconStyled = styled(PersonOutlineOutlined)`
width: 27px;
height: 27px;
object-fit: contain;
`

export const IconsWrapper = styled.div`
width: 120px;
height: 49px;
`