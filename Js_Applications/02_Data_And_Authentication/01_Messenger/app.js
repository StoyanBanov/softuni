const inputs = document.getElementsByTagName('input'),
    txtArea = document.getElementById('messages')

function attachEvents() {
    inputs[2].addEventListener('click', async () => {
        await request('post', {
            author: inputs[0].value,
            content: inputs[1].value
        })

        await load()
    })

    inputs[3].addEventListener('click', load)
}

async function load() {
    txtArea.textContent = Object.values(await request('get'))
        .map(c => `${c.author}: ${c.content}`)
        .join('\n')
}

async function request(method, body) {
    const options = { method }
    if (body) {
        options.headers = { 'content-type': 'application/json' }
        options.body = JSON.stringify(body)
    }

    return (await fetch('http://localhost:3030/jsonstore/messenger', options)).json()
}

attachEvents();