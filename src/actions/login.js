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

export const doSignUp = (name, email, cpf, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}${baseID}/signup`, {
            name, email, cpf, password
        })
        localStorage.setItem("token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        if (response.data.user.hasAddress === false) {
            dispatch(push(routes.newAddress))
        };
    } catch (e) {
        alert("Erro ao logar. Entre em contato conosco")
        console.error(e)
    }
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