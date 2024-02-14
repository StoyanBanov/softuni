import { del, put } from "./api.js"
import { loadCaches } from "./util.js"

export const createNav = (email) => `<a id="home" class="active">Home</a>
        ${email !== null
        ? `<div id="user">
                <a id="logout" href="javascript:void(0)">Logout</a>
            </div>`
        : `<div id="guest">
                <a id="login" href="login.html">Login</a>
                <a id="register" href="register.html">Register</a>
            </div>`
    }
        <p class="email">Welcome, <span>${email !== null ? email : 'guest'}</span></p>`

export const createCatchCard = (c) => {
    const isOwner = sessionStorage.getItem('_id') == c._ownerId

    const div = document.createElement('div')
    div.classList.add('catch')

    div.innerHTML = `<label>Angler</label>
                    <input type="text" class="angler" value="${c.angler}">
                    <label>Weight</label>
                    <input type="text" class="weight" value="${c.weight}">
                    <label>Species</label>
                    <input type="text" class="species" value="${c.species}">
                    <label>Location</label>
                    <input type="text" class="location" value="${c.location}">
                    <label>Bait</label>
                    <input type="text" class="bait" value="${c.bait}">
                    <label>Capture Time</label>
                    <input type="number" class="captureTime" value="${c.captureTime}">
                    <button class="update" data-id="${c._id}" ${isOwner ? '' : 'disabled'}>Update</button>
                    <button class="delete" data-id="${c._id}" ${isOwner ? '' : 'disabled'}>Delete</button>`

    const inputs = Array.from(div.getElementsByTagName('input'))
    for (const inp of inputs) {
        inp.disabled = !isOwner
    }

    div.addEventListener('click', async e => {
        const btn = e.target

        if (btn.tagName != 'BUTTON') return

        if (btn.className == 'update') await updateCatch()
        else await deleteCatch()

        await loadCaches()
    })

    async function updateCatch() {
        await put(
            '/data/catches/' + c._id,
            inputs.reduce((t, c) => Object.assign(t, { [c.className]: c.value }), {})
        )
    }

    async function deleteCatch() {
        await del('/data/catches/' + c._id,)
    }

    return div
}