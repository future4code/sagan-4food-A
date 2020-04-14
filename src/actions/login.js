import axios from 'axios'
import {routes} from "../../src/containers/Router/index";
import {push} from "connected-react-router";


const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/'
const baseID = 'FourFoodA'

export const doLogin = (user, pass) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}${baseID}/login`, {
            email: user,
            password: pass
        });
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        if (response.data.user.hasAddress === false) {
            dispatch(push(routes.newAddress))
        }
    } catch (e) {
        alert("Erro ao logar. Entre em contato conosco")
        console.error(e)
    }
}

export const doSignUp = (name, email, cpf, password) => (dispatch) => {
    const userSignup = axios.post(`${baseUrl}${baseID}/signup`, {
        name, email, cpf, password
    }).then(response => {
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        if (response.data.user.hasAddress === false) {
            dispatch(push(routes.newAddress))
        };
    }).catch(error => {
        console.log(error.response.data.message)
        dispatch(setErrorMsg(error.response.data.message))
    })
}

export const doNewAddress = (data) => async (dispatch) => {
    try {
        const token = localStorage.getItem("token")
        const response = await axios.put(`${baseUrl}${baseID}/address`, data, {
            headers: {
                auth: token
            }
        })
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user))
    } catch (e) {
        alert("Erro ao logar. Entre em contato conosco")
        console.error(e)
    }
}

export const setErrorMsg = (data) => ({
    type: "SET_ERROR_MSG",
    payload: data,
});

export const doDatarefresh = (name, email, cpf) => (dispatch) => {
    const token = localStorage.getItem("token")
    const userDataRefresh = axios.put(`${baseUrl}${baseID}/profile`, {
        name, email, cpf
    }, {
        headers: {
            auth: token
        }
    }).then(response => {
        localStorage.setItem("user", JSON.stringify(response.data.user))
        if (response.data.user.hasAddress === false) {
            dispatch(push(routes.newAddress))
        } else {
            dispatch(push(routes.root))
        }
    }).catch(error => {
        console.log(error.response.data.message)
        dispatch(setErrorMsg(error.response.data.message))
    })
}