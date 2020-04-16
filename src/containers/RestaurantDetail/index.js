import React, { useEffect } from "react";
import CardMenu from "../../components/CardMenu/CardMenu";
import { connect } from "react-redux";
import { getRestaurantDetail } from "../../actions/RestaurantDetail";
import styled from "styled-components";
import Footer from '../../components/Footer/index'

const Box = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  margin-left: 16px;
`;

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

  return (
    <div>
      {categoryRestaurantNoDuplicate &&
        categoryRestaurantNoDuplicate.map((item) => {
          return (
            <div>
              <Box key={item}>{item}</Box>
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
