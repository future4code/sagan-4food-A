import React, { Component } from "react"

import { AppbarStyled, TitleStyled, BoxWrapper, ToolbarStyled, TitleBoxWrapper } from './styles'
import { ArrowBackIos } from '@material-ui/icons'


class Appbar extends Component {

    render() {
        return (
            <BoxWrapper>
                <AppbarStyled position='static'>
                    <ToolbarStyled>
                        <ArrowBackIos>
                            {/* Não sei bem como fazer, é a rota pra página anterior. Mas não aparece em todas pgs. */}
                        </ArrowBackIos>
                        <TitleBoxWrapper>
                            <TitleStyled variant="h6">
                                Header
                        {/* colocar a variável para mostrar a tela de acordo com a atividade do usuário */}
                            </TitleStyled>
                        </TitleBoxWrapper>
                    </ToolbarStyled>
                </AppbarStyled>
            </BoxWrapper>
        )
    }
}

export default Appbar