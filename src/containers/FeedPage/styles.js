import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const ContentHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  margin-bottom: 50px;
`

export const TextFieldSearchStyled = styled(TextField)`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`

export const CategoryMenuWrapper = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  overflow-x: scroll;
  align-items: center;
  text-align: center;
`

export const CategoryMenuStyled = styled.span `
  width: 100%;
  height: 18px;
  margin: 0 1vw;
  font-family: 'Roboto';
  font-size: 16px;
  letter-spacing: -0.4px;
  /* text-align: center; */
  color: #e8222e;
 
`