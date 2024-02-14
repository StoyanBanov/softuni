import { post } from "./src/api.js"
import { manageSubmit, setUserData } from "./src/util.js"

document.querySelector('form').addEventListener('submit', manageSubmit(login))

async function login(data) {
    setUserData(await post('/users/login', data))

    location = '/'
}