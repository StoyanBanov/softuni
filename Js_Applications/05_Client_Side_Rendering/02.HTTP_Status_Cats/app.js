import { render, html } from "./node_modules/lit-html/lit-html.js";
import { repeat } from "./node_modules/lit-html/directives/repeat.js";
import { cats } from "./catSeeder.js";

const container = document.getElementById('allCats')

renderUl()

function renderUl() {
    render(html`<ul>
        ${repeat(cats, c => c.id, c => html`<li>
            <img src="/images/${c.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button @click=${onClick} class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="100">
                        <h4>Status Code: ${c.statusCode}</h4>
                        <p>${c.statusMessage}</p>
                    </div>
                </div>
        </li>`)}
    </ul>`, container)
}

function onClick(e) {
    const statusDiv = e.target.parentElement.children[1]

    const isHidden = statusDiv.style.display == 'none'

    if (isHidden) {
        e.target.textContent = 'Hide status code'
        statusDiv.style.display = 'block'
    } else {
        e.target.textContent = 'Show status code'
        statusDiv.style.display = 'none'
    }
}