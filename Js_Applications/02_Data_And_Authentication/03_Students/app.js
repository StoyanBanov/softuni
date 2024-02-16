(async () => {
    const students = Object.values(await request('get'))
    document.querySelector('tbody').replaceChildren(...students.map(createStudentCard))
})()

document.getElementById('form').addEventListener('submit', async e => {
    e.preventDefault()

    await request('post', Object.fromEntries(new FormData(e.target).entries()))

    location.reload()
})

function createStudentCard(stu) {
    const tr = document.createElement('tr')

    tr.innerHTML = `<td>${stu.firstName}</td>
                    <td>${stu.lastName}</td>
                    <td>${stu.facultyNumber}</td>
                    <td>${stu.grade}</td>`

    return tr
}

async function request(method, body) {
    options = { method }
    if (body) {
        options.headers = { 'content-type': 'application/json' }
        options.body = JSON.stringify(body)
    }

    return await (await fetch('http://localhost:3030/jsonstore/collections/students', options)).json()
}