import { del, get } from "./data/api.js";
import { render } from "./util.js";
import { createCreate } from "./views/create.js";
import { createDetails } from "./views/details.js";
import { createEdit } from "./views/edit.js";
import { createHome } from "./views/home.js";
import { createLogin } from "./views/login.js";
import { createRegister } from "./views/register.js";

const container = document.getElementById('container')

container.addEventListener('click', async e => {
    const a = e.target
    if (a.tagName != 'A') return

    e.preventDefault()
    let view, movieId = a.dataset.id
    switch (a.textContent) {
        case 'Movies':
            view = createHome
            break;
        case 'Add Movie':
            view = createCreate
            break;
        case 'Edit':
            view = () => createEdit(movieId)
            break;
        case 'Delete':
            await del('/data/movies/' + movieId)
            view = createHome
            break;
        case 'Register':
            view = createRegister
            break;
        case 'Login':
            view = createLogin
            break;
        case 'Logout':
            sessionStorage.clear()
            view = createHome
            break;
    }

    if (view)
        await render(view)
})

render(createHome)