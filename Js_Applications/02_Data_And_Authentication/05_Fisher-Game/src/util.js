import { get } from "./api.js"
import { createCatchCard } from "./views.js"

export function manageSubmit(callback) {
    return function (e) {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(this))

        if (Object.values(data).some(d => !d))
            throw new Error('All fields a required!')

        callback(data)
    }
}

export function setUserData({ _id, accessToken, email }) {
    sessionStorage.setItem('_id', _id)
    sessionStorage.setItem('token', accessToken)
    sessionStorage.setItem('email', email)
}

export async function loadCaches() {
    const catches = await get('/data/catches')

    // for judge to work
    if (Array.isArray(catches))
        document.getElementById('catches').replaceChildren(...catches.map(createCatchCard))
    else
        document.getElementById('catches').replaceChildren(createCatchCard(catches))
}