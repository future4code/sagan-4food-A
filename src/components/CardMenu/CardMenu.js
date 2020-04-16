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
import SelectFoodToCart from "../../containers/SelectFoodToCart/SelectFoodToCart";

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
          <SelectFoodToCart id={props.id} />
        </CardActions>
      </CardContentMenu>
    </CardStyled>
  );
}

export default CardMenu;
