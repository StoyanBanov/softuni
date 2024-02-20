import { clearUserData, setUserData } from "../util.js"
import { get, post } from "./api.js"

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
}

export async function login(data) {
    setUserData(await post(endpoints.login, data))
}

export async function register(data) {
    if (data.password != data.repeatPassword)
        throw new Error('Passwords don\'t match!')

    setUserData(await post(endpoints.register, data))
}

export async function logout() {
    await get(endpoints.logout)
    clearUserData()
}