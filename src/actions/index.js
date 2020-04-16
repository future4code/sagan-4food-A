import axios from 'axios'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/FourFoodA"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im85U1lCUERTZmZhbTNhek5ONnJnIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTU4Njg4NTQyNH0.oxzSJOPr8s9sRwbzeXoQ3ANwVUCltmziuralXl4UYf4"

export const getRestaurants = () => async (dispatch) => {

    try {
        const response = await axios.get(`${baseUrl}/restaurants`, {
        headers : {
            auth: token
        }})
        console.log(response.data.restaurants)
        dispatch(getRestaurantsToReducer(response.data.restaurants))

    } catch  (error) {
        alert("Não foi possível carregar lista de restuarantes!")

    }  
}

export const getRestaurantsToReducer = (restaurants) => ({
    type:'GET_RESTAURANTS',
    payload : 
        restaurants,
})

export const setFilteredRestaurants = (restaurants) => ({
    type:'SET_FILTERED_RESTAURANTS',
    payload: {
        restaurants,
    }
})

export const setInputSearch = (inputData) => ({
    type: 'SET_INPUT_SEARCH',
    payload: {
        inputData
    }
})

