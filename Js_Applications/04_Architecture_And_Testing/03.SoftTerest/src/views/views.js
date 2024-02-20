import { login, register } from "../data/auth.js";
import { addIdea, getIdeaById, getIdeas } from "../data/ideas.js";
import { manageSubmit } from "../util.js";

const views = document.querySelectorAll('body > div');
for (let i = 1; i < views.length; i++) {
    views[i].remove()
}

manageSubmit(views[1].querySelector('form'), onRegister)
manageSubmit(views[2].querySelector('form'), onLogin)
manageSubmit(views[5].querySelector('form'), onCreate)

const delBtn = views[4].querySelector('a')
delBtn.remove()

const navItems = document.querySelectorAll('nav ul > li');

const [ideaCard, noIdeasCard] = views[3].children

export function appendHome() {
    appendNav()
    appendView(0)
}

export async function appendDashboard() {
    appendNav(0)

    views[3].innerHTML = ''

    const ideas = await getIdeas()

    let child
    if (ideas.length > 0) {
        const fragment = document.createDocumentFragment()

        for (const i of ideas) {
            const card = ideaCard.cloneNode(true)

            card.querySelector('p').textContent = i.title
            card.querySelector('img').src = i.img
            card.querySelector('a').dataset.id = i._id

            fragment.appendChild(card)
        }

        child = fragment
    }
    else child = noIdeasCard

    views[3].appendChild(child)

    appendView(3)
}

export function appendRegister() {
    appendNav(4)
    appendView(1)
}

export function appendLogin() {
    appendNav(3)
    appendView(2)
}

export async function appendDetails(id) {
    appendNav()

    const idea = await getIdeaById(id)

    const view = views[4]

    view.querySelector('img').src = idea.img
    view.querySelector('h2').textContent = idea.title
    view.querySelector('.idea-description').textContent = idea.description

    const delBtnContainer = view.querySelector('.text-center')

    if (idea._ownerId == sessionStorage.getItem('_id')) {
        delBtn.dataset.id = idea._id
        delBtnContainer.appendChild(delBtn)
    } else {
        delBtn.remove()
    }

    appendView(4)
}

export function appendCreate() {
    appendNav(1)
    appendView(5)
}

export function appendNav(ind) {
    navItems.forEach(a => {
        a.style.display = 'none'
        a.classList.remove('active')
    })
    navItems[0].style.display = ''

    if (sessionStorage.getItem('token')) {
        navItems[1].style.display = ''
        navItems[2].style.display = ''
    } else {
        navItems[3].style.display = ''
        navItems[4].style.display = ''
    }

    if (Number.isInteger(ind))
        navItems[ind].classList.add('active')
}

function appendView(ind) {
    document.body.replaceChild(views[ind], document.body.children[1])
}

async function onLogin(data) {
    await login(data)

    appendHome()
}

async function onRegister(data) {
    await register(data)

    appendHome()
}

async function onCreate(data) {
    await addIdea(data)

    appendDashboard()
}