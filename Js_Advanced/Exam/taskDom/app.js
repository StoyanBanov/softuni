window.addEventListener("load", solve);

function solve() {
    const addBtn = document.querySelector('form button'),
        [ulPreview, ulList] = document.getElementsByTagName('ul')

    const inputs = Array.from(document.querySelectorAll('form input'))
    inputs.push(document.querySelector('form select'))

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault()

        if (inputs.some(i => !i.value)) return

        ulPreview.appendChild(createLi(inputs.reduce((obj, inp) => Object.assign(obj, { [inp.id]: inp.value }), {})))

        inputs.forEach(i => i.value = '')

        addBtn.disabled = true
    })

    function createLi(data) {
        const li = document.createElement('li')
        li.className = 'snowman-info'
        li.innerHTML = `<article>
            <p>Name: ${data['snowman-name']}</p>
            <p>Height: ${data['snowman-height']}</p>
            <p>Location: ${data.location}</p>
            <p>Creator: ${data['creator-name']}</p>
            <p>Attribute: ${data['special-attribute']}</p>
        </article>
        <div>
            <button class="edit-btn">Edit</button>
            <button class="next-btn">Next</button>
        </div>`

        li.addEventListener('click', ({ target }) => {
            if (target.tagName != 'BUTTON') return

            const btnTxt = target.textContent
            if (btnTxt == 'Edit') {
                inputs[0].value = data['snowman-name']
                inputs[1].value = data['snowman-height']
                inputs[2].value = data.location
                inputs[3].value = data['creator-name']
                inputs[4].value = data['special-attribute']

                li.remove()
            } else if (btnTxt == 'Next') {
                li.children[1].remove()

                const sendBtn = document.createElement('button')
                sendBtn.className = 'send-btn'
                sendBtn.textContent = 'Send'
                li.children[0].appendChild(sendBtn)

                li.className = 'snowman-content'

                ulList.appendChild(li)
            } else if (btnTxt == 'Send') {
                document.querySelector('main').remove()

                document.getElementById('back-img').hidden = false

                const backBtn = document.createElement('button')
                backBtn.className = 'back-btn'
                backBtn.textContent = 'Back'

                backBtn.addEventListener('click', () => window.location.reload())

                document.querySelector('body').appendChild(backBtn)
            }

            addBtn.disabled = false
        })

        return li
    }
}