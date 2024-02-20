import { logout } from "./data/auth.js";
import { deleteIdea } from "./data/ideas.js";
import { appendCreate, appendDashboard, appendDetails, appendHome, appendLogin, appendRegister } from "./views/views.js";

document.querySelector('.navbar-brand').addEventListener('click', e => {
    e.preventDefault()
    appendHome()
})

document.body.addEventListener('click', e => {
    const a = e.target
    if (a.tagName != 'A') return

    const ideaId = a.dataset.id

    switch (a.textContent) {
        case 'Register':
        case 'Sign-Up':
            appendRegister()
            e.preventDefault()
            break;
        case 'Login':
        case 'Sign-In':
            appendLogin()
            e.preventDefault()
            break;
        case 'Logout':
            onLogout()
            e.preventDefault()
            break;
        case 'Dashboard':
            appendDashboard()
            e.preventDefault()
            break;
        case 'Details':
            appendDetails(ideaId)
            e.preventDefault()
            break;
        case 'Create':
            appendCreate()
            e.preventDefault()
            break;
        case 'Delete':
            onDelete(ideaId)
            e.preventDefault()
            break;
    }
});

appendHome()

async function onLogout() {
    await logout()

    appendHome()
}

async function onDelete(id) {
    await deleteIdea(id)

    appendDashboard()
}