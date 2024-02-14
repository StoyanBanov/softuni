import { get, post } from "./src/api.js"
import { loadCaches, manageSubmit } from "./src/util.js"
import { createNav } from "./src/views.js"

const token = sessionStorage.getItem('token')

document.getElementById('add-btn').disabled = token === null

document.querySelector('nav').innerHTML = createNav(sessionStorage.getItem('email'))

if (token !== null) {
    document.getElementById('logout').addEventListener('click', async () => {
        await get('/users/logout')

        sessionStorage.clear()

        location.reload()
    })
}

document.getElementById('load-button').addEventListener('click', loadCaches)

document.getElementById('addForm').addEventListener('submit', manageSubmit(createCatch))

async function createCatch(data) {
    await post('/data/catches', data)

    await loadCaches()
}