import React from "react";
import {
  CardMediaStyled,
  CardStyled,
  TypographyWrapperTitle,
  TypographyDescription,
  TypographyPrice,
  CardContentMenu,
} from "./CardMenuStyles";
import { CardActions } from "@material-ui/core";
import SelectBackDrops from "../components/SelectBackDrop";

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
          <SelectBackDrops id={props.id} />
        </CardActions>
      </CardContentMenu>
    </CardStyled>
  );
}

export default CardMenu;
