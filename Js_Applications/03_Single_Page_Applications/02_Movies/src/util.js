import { createFooter } from "./views/footer.js"
import { createNav } from "./views/nav.js"

const container = document.getElementById('container')

export function manageSubmit(callback) {
    return e => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.target))

        if (Object.values(data).some(d => !d))
            throw new Error('all fields are required!')

        callback(data)
    }
}

export async function render(view) {
    const [nav, main, footer] = await Promise.all([createNav(), view(), createFooter()])

    container.innerHTML = `${nav}\n${main}\n${footer}`
}

export function setUserData({ accessToken, _id, email }) {
    sessionStorage.setItem('token', accessToken)
    sessionStorage.setItem('_id', _id)
    sessionStorage.setItem('email', email)
}