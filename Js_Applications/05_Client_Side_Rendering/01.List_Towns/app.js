import { render, html } from './node_modules/lit-html/lit-html.js'
import { repeat } from './node_modules/lit-html/directives/repeat.js'

const root = document.getElementById('root')

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()

    const towns = new FormData(e.target).get('towns').split(', ')

    render(html`<ul>
        ${repeat(towns, t => t, t => html`<li>${t}</li>`)}
    </ul>`, root)
})