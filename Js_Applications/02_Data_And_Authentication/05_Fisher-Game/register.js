import { post } from "./src/api.js"
import { manageSubmit, setUserData } from "./src/util.js"

document.querySelector('form').addEventListener('submit', manageSubmit(register))

async function register(data) {
    if (data.password != data.rePass)
        throw new Error('Passwords dob\'t match!')

    setUserData(await post('/users/register', data))

    location = '/'
}