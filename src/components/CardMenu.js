import React from "react";
import {
  CardMediaStyled,
  CardStyled,
  TypographyWrapperTitle,
  TypographyDescription,
  TypographyPrice,
  ButtonAddAndRemove,
  CardContentMenu,
} from "./CardMenuStyles";
import { CardActions } from "@material-ui/core";

function CardMenu(props) {
  return (
    <CardStyled>
      <div>
        <CardMediaStyled component="img" src={props.img} />
      </div>
      <CardContentMenu>
        <TypographyWrapperTitle>{props.title}</TypographyWrapperTitle>
        <TypographyDescription>{props.description}</TypographyDescription>
        <TypographyPrice>R${props.price}</TypographyPrice>
        <CardActions>
          <ButtonAddAndRemove>Adicionar</ButtonAddAndRemove>
        </CardActions>
      </CardContentMenu>
    </CardStyled>
  );
}

export default CardMenu;
