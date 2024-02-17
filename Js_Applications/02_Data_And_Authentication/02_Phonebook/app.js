const phoneBookUl = document.getElementById('phonebook'),
    inputs = Array.from(document.getElementsByTagName('input'))

function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', load)

    document.getElementById('btnCreate').addEventListener('click', async () => {
        await request('post', '', inputs.reduce((t, c) => Object.assign(t, { [c.id]: c.value }), {}))

        await load()
    })
}

attachEvents();

async function load() {
    const contacts = Object.values(await request('get'))

    phoneBookUl.replaceChildren(...contacts.map(cerateContactCard))
}

function cerateContactCard(c) {
    const li = document.createElement('li')

    li.innerHTML = `${c.person}: ${c.phone}<button>Delete</button>`

    li.querySelector('button').addEventListener('click', async () => {
        await request('delete', '/' + c._id)

        await load()
    })

    return li
}

async function request(method, url = '', body) {
    const options = { method, headers: {} }

    if (body) {
        options.headers['content-type'] = 'application/json'
        options.body = JSON.stringify(body)
    }

    return await (await fetch('http://localhost:3030/jsonstore/phonebook' + url, options)).json()
}