import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ButtonAddAndRemove } from "./CardMenuStyles";
import { connect } from "react-redux";
import { saveProducts } from "../actions/saveProducts";

class DialogSelect extends React.Component {
  state = {
    open: false,
    amount: 0,
    products: [
      {
        quantity: 0,
      },
    ],
  };

  handleChange = (name) => (event) => {
    this.setState({ [name]: Number(event.target.value) });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleAddProducts = (id) => {
    let newProducts = [...this.state.products];
    const { amount } = this.state;
    newProducts[0].quantity += Number(amount);
    newProducts.push({ quantity: amount, id });
    this.props.saveProducts(newProducts);
    this.handleClose();
  };

  render() {
    console.log(this.state.products);
    return (
      <div>
        <ButtonAddAndRemove onClick={this.handleClickOpen}>
          Adicionar
        </ButtonAddAndRemove>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Selecione a quantidade desejada</DialogTitle>
          <DialogContent>
            <form onSubmit={() => this.addProducts(this.props.id)}>
              <FormControl>
                <Select
                  value={this.state.amount}
                  onChange={this.handleChange("amount")}
                  input={<Input id="age-simple" />}
                >
                  <MenuItem value="0">
                    <em>0</em>
                  </MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => this.handleAddProducts(this.props.id)}
              color="primary"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveProducts: (newsProducts) => dispatch(saveProducts(newsProducts)),
  };
};

const mapStateToProps = (state) => {
  return {
    products: state.saveProdutcs,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogSelect);
