import { render } from './node_modules/lit-html/lit-html.js'
import { repeat } from './node_modules/lit-html/directives/repeat.js'
import { option } from './option.js'

const url = 'http://localhost:3030/jsonstore/advanced/dropdown'

const select = document.getElementById('menu')

document.querySelector('form').addEventListener('submit', async e => {
    e.preventDefault()

    await fetch(
        url,
        {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ text: e.target.querySelector('#itemText').value })
        })

    loadOptions()
})

loadOptions()

async function loadOptions() {
    const options = Object.values(await (await fetch(url)).json())

    render(repeat(options, o => o._id, option), select)
}