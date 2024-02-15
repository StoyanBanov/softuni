const host = 'http://localhost:3030/jsonstore/collections/books'

const form = document.querySelector('form'),
    tbody = document.querySelector('tbody')

let editId

document.getElementById('loadBooks').addEventListener('click', loadBooks)

form.addEventListener('submit', async e => {
    e.preventDefault()

    const data = Object.fromEntries(new FormData(e.target).entries())

    if (editId)
        await request('put', '/' + editId, data)
    else
        await request('post', '', data)

    await loadBooks()
})

async function loadBooks() {
    const books = Object.entries(await get())

    tbody.replaceChildren(...books.map(createBookCard))
}

function createBookCard([id, book]) {
    const tr = document.createElement('tr')

    tr.innerHTML = `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>`

    tr.addEventListener('click', async e => {
        const btn = e.target

        if (btn.tagName != 'BUTTON') return

        if (btn.textContent == 'Edit') {
            console.log(book);
            form.querySelector('h3').textContent = 'Edit FORM'
            form.querySelector('button').textContent = 'Save'
            form.querySelector('input[name="title"]').value = book.title
            form.querySelector('input[name="author"]').value = book.author

            editId = id
        } else {
            await request('delete', id)
        }
    })

    return tr
}

async function request(method, url = '', body) {
    const options = { method }

    if (body) {
        options.headers = { 'content-type': 'application/json' }
        options.body = JSON.stringify(body)
    }

    const response = await fetch(host + url, options)

    if (!response.ok) throw new Error('err')

    try {
        return await response.json()
    } catch (error) {
        return response
    }
}

const get = request.bind(null, 'get')