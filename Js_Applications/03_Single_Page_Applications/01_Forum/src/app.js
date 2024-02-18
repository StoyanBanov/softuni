import { homeView } from "./views/home/home.js";
import { render } from "./util.js";

document.querySelector('nav').addEventListener('click', async e => {
    const a = e.target
    if (a.tagName != 'A') return

    e.preventDefault()

    if (a.textContent == 'Home')
        homeView()
}, false)

homeView()