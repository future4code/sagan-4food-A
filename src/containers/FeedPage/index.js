import React, { Component } from "react";
import Footer from "../../components/Footer";
import CartRestaurant from "../CartRestaurant";
import SearchPlaceholder from "../SearchPlaceholder";
import HistoryDivider from "../HistoryDivider/HistoryDivider";
import { connect } from "react-redux";
import { getRestaurants, setInputSearch } from "../../actions";
import { ContentHomeWrapper, TextFieldSearchStyled } from "./styles";

class FeedPage extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    // console.log(this.props.restaurants.name)

    const handleInputClear = () => {
      this.props.setInputSearch("");
      console.log("oi");
    };

    const handleInputHamburguer = () => {
      this.props.setInputSearch("Hamburguer");
      console.log("oi");
    };

    const { restaurants, filteredRestaurants, inputSearch } = this.props;

    const newRestaurantsList = [...restaurants];
    const filteredRestaurantsList = newRestaurantsList.filter(
      (restaurants) =>
        restaurants.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
        restaurants.category.toLowerCase().includes(inputSearch.toLowerCase())
    );

    let allRestaurants = (
      <>
        <button onClick={handleInputHamburguer}>Hamburguer</button>
        {restaurants.map((restaurants) => {
          return (
            <CartRestaurant
              image={restaurants.logoUrl}
              name={restaurants.name}
              deliveryTime={restaurants.deliveryTime}
              shipping={restaurants.shipping}
            />
          );
        })}
      </>
    );

    let allRestaurantsFilter = (
      <>
        {filteredRestaurantsList.map((restaurants) => {
          return (
            <CartRestaurant
              image={restaurants.logoUrl}
              name={restaurants.name}
              deliveryTime={restaurants.deliveryTime}
              shipping={restaurants.shipping}
            />
          );
        })}
        <button onClick={handleInputClear}>Limpar Busca</button>
      </>
    );

    return (
      <>
        <HistoryDivider head={"IFuture"} />

        <ContentHomeWrapper>
          <SearchPlaceholder restaurants={this.props.restaurants} />

          <form autoComplete="on">
            <TextFieldSearchStyled label="Restaurante" variant="outlined" />
          </form>
          {/* FALTA MENU COM SCROLL LATERAL */}
          {restaurants.map((restaurants) => {
            return (
              <CartRestaurant
                image={restaurants.logoUrl}
                name={restaurants.name}
                deliveryTime={restaurants.deliveryTime}
                shipping={restaurants.shipping}
                id={restaurants.id}
              />
            );
          })}

          {this.props.inputSearch === ""
            ? allRestaurants
            : allRestaurantsFilter}
        </ContentHomeWrapper>

        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  filteredRestaurants: state.restaurants.filteredRestaurants,
  inputSearch: state.filterSearch.inputSearch,
});

const mapDispatchToProps = (dispatch) => ({
  getRestaurants: () => dispatch(getRestaurants()),
  setInputSearch: (inputData) => dispatch(setInputSearch(inputData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
