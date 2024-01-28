function solve() {
    const divs = document.querySelectorAll('section div:nth-child(2)'),
        inpName = document.getElementById('task'),
        inpDesc = document.getElementById('description'),
        inpDate = document.getElementById('date')


    divs[0].querySelector('form').addEventListener('submit', e => {
        e.preventDefault()

        if (checkForInvalidInput()) return

        divs[1].appendChild(createArticle())
    })

    document.querySelector('main').addEventListener('click', e => {
        if (e.target.tagName != 'BUTTON' || e.target.id == 'add') return

        const btnTxt = e.target.textContent,
            article = e.target.parentElement.parentElement

        if (btnTxt == 'Start') {
            article.querySelector('div').innerHTML =
                `<button class="red">Delete</button>
                <button class="orange">Finish</button>`

            divs[2].appendChild(article)
        } else if (btnTxt == 'Delete') {
            article.remove()
        } else if (btnTxt == 'Finish') {
            e.target.parentElement.remove()

            divs[3].appendChild(article)
        }
    })

    function createArticle() {
        const article = document.createElement('article')
        article.innerHTML = `<h3>${inpName.value}</h3>
            <p>Description: ${inpDesc.value}</p>
            <p>Due Date: ${inpDate.value}</p>
            <div class="flex">
                <button class="green">Start</button>
                <button class="red">Delete</button>
            </div>`

        return article
    }

    function checkForInvalidInput() {
        return [inpName, inpDesc, inpDate].some(i => i.value == '')
    }
}