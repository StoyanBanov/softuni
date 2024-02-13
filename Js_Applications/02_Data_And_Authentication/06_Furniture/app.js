document.addEventListener('DOMContentLoaded', () => {
    console.log(window.location.pathname);
    switch (window.location.pathname) {
        case '/':
        case 'home.html':
            solve()
            break;
        case '/login.html':
            auth()
            break;
        case '/homeLogged.html':
            logged()
            break;
    }
})

async function solve() {
    appendFurniture(await get('/data/furniture'))
}

async function logged() {
    const furniture = await get('/data/furniture')

    appendFurniture(furniture)

    document.getElementById('logoutBtn').addEventListener('click', async e => {
        await get('/users/logout')
        sessionStorage.clear()
        location = '/'
    })

    document.querySelector('form').addEventListener('submit', async e => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(e.target))
        if (Object.values(data).some(d => !d)) return

        await post('/data/furniture', data)

        location.reload()
    })

    document.getElementById('buyBtn').addEventListener('click', async () => {
        const boughtFurniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(c => furniture.find(f => f._id == c.id))

        if (boughtFurniture.length > 0) {
            await post('/data/orders', {
                boughtFurniture,
                totalSum: boughtFurniture.reduce((t, c) => t + Number(c.price), 0)
            })
        }
    })

    document.getElementById('show-orders-btn').addEventListener('click', async () => {
        const orders = await get(`/data/orders?where=${encodeURIComponent(`_ownerId="${sessionStorage.getItem('_id')}"`)}`)

        const itemNames = orders.map(o => o.boughtFurniture.map(f => f.name).join(', ')).join(', ')

        const spans = document.querySelectorAll('.orders span')

        spans[0].textContent = itemNames || `Nothing bought yet!`

        spans[1].textContent = `${orders.reduce((t, c) => t + c.totalSum, 0)} $`
    })
}

async function auth() {
    const [registerForm, loginForm] = document.getElementsByTagName('form')

    registerForm.addEventListener('submit', async e => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(registerForm).entries())

        if (Object.values(data).some(d => !d) || data.password != data.rePass)
            return

        const user = await post('/users/register', data)

        sessionStorage.setItem('token', user.accessToken)
        sessionStorage.setItem('_id', user._id)

        location.pathname = 'homeLogged.html'

    })

    loginForm.addEventListener('submit', async e => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(loginForm).entries())

        const user = await post('/users/login', data)

        sessionStorage.setItem('token', user.accessToken)
        sessionStorage.setItem('_id', user._id)

        location.pathname = 'homeLogged.html'
    })
}

function appendFurniture(furniture) {
    const tbody = document.querySelector('tbody')
    tbody.replaceChildren(...furniture.map(createFurnitureTr))
}

function createFurnitureTr({ img, name, price, factor, _id }) {
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>
                    <img src="${img}" />
                </td>
                <td>
                    <p>${name}</p>
                </td>
                <td>
                    <p>${price}</p>
                </td>
                <td>
                    <p>${factor}</p>
                </td>
                <td>
                ${sessionStorage.getItem('token') === null
            ? `<input id="${_id}" type="checkbox" disabled/>`
            : `<input id="${_id}" type="checkbox"/>`
        }   
                </td>`

    return tr
}

const host = 'http://localhost:3030'
async function request(method, url, body) {
    const options = { method, headers: {} }

    if (body) {
        options.headers['content-type'] = 'application/json'
        options.body = JSON.stringify(body)
    }

    const token = sessionStorage.getItem('token')
    if (token)
        options.headers['x-authorization'] = token

    const response = await fetch(host + url, options)

    if (!response.ok)
        throw new Error('err!')
    try {
        return await response.json()
    } catch (error) {
        return response
    }
}

const get = request.bind(null, 'get')
const post = request.bind(null, 'post')