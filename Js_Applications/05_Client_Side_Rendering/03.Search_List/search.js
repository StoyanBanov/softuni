import { html, render } from "./node_modules/lit-html/lit-html.js";
import { repeat } from "./node_modules/lit-html/directives/repeat.js";
import { towns } from "./towns.js";

const container = document.getElementById('towns'),
   search = document.getElementById('searchText'),
   result = document.getElementById('result')

document.querySelector('button').addEventListener('click', () => {
   renderUl()

   result.textContent = search.value
      ? towns.filter(t => t.includes(search.value)).length + ' matches found'
      : ''
})

const view = () => html`<ul>
    ${repeat(towns, t => t, t => html`<li class=${search.value && t.includes(search.value) ? 'active' : ''}>${t}</li>`)}
</ul>`

renderUl()

async function renderUl() {
   render(view(), container)
}