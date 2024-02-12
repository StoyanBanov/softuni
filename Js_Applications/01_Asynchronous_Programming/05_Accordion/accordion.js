const host = 'http://localhost:3030/jsonstore/advanced/articles'

const mainSection = document.getElementById('main');

(async function solution() {
    const articles = await get('/list')

    mainSection.innerHTML = ''
    for (const a of articles) {
        mainSection.appendChild(makeArticleDiv(a))
    }
})()

function makeArticleDiv(article) {
    const div = document.createElement('div')
    div.className = 'accordion'
    div.innerHTML = `<div class="head">
                <span>${article.title}</span>
                <button class="button" id="${article._id}">More</button>
            </div>
            <div class="extra">
                <p></p>
            </div>`

    let isHidden = true

    const extraDiv = div.children[1],
        extraDivParag = extraDiv.children[0]

    div.querySelector('button').addEventListener('click', async function () {
        if (isHidden) {
            this.textContent = 'Less'
            extraDiv.style.display = 'block'
            extraDivParag.textContent = (await get('/details/' + this.id)).content
        } else {
            this.textContent = 'More'
            extraDiv.style.display = 'none'
            extraDivParag.textContent = ''
        }

        isHidden = !isHidden
    })

    return div
}

async function get(url) {
    return (await fetch(host + url)).json()
}