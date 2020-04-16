import React from "react";
import CardMenu from "../../components/CardMenu/CardMenu";
import { connect } from "react-redux";
import { getRestaurantDetail } from "../../actions/RestaurantDetail";
import Footer from "../../components/Footer/index";
import CardRestaurante from "../../components/CardRestaurante/CardRestaurante";
import { DivTitle, Hr } from "./styled";
import HistoryDivider from "../HistoryDivider/HistoryDivider";

const RestaurantDetail = (props) => {
  const products = props.dataRestaurant.products;
  const categoryRestaurantDuplicate =
    products &&
    products.map((food) => {
      return food.category;
    });

  const categoryRestaurantNoDuplicate =
    categoryRestaurantDuplicate &&
    categoryRestaurantDuplicate.filter((category, index) => {
      return categoryRestaurantDuplicate.indexOf(category) === index;
    });

  const restaurant = props.dataRestaurant;
  console.log(restaurant && restaurant.logoUrl);
  return (
    <div>
      <HistoryDivider head={"Restaurante"} showGoBack={true} />
      {restaurant && (
        <CardRestaurante
          logoUrl={restaurant.logoUrl}
          name={restaurant.name}
          deliveryTime={restaurant.deliveryTime}
          shipping={restaurant.shipping}
          category={restaurant.category}
          address={restaurant.address}
        />
      )}

      {console.log(props.dataRestaurant)}
      {categoryRestaurantNoDuplicate &&
        categoryRestaurantNoDuplicate.map((item) => {
          return (
            <div>
              <DivTitle key={item}>{item}</DivTitle>
              <Hr />
              {products
                .filter((elemento) => elemento.category === item)
                .map((food) => (
                  <CardMenu
                    key={food.id}
                    title={food.name}
                    description={food.description}
                    img={food.photoUrl}
                    price={food.price}
                    id={food.id}
                  />
                ))}
            </div>
          );
        })}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dataRestaurant: state.SaveDetailInState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getRestaurantDetail: (id) => dispatch(getRestaurantDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);
