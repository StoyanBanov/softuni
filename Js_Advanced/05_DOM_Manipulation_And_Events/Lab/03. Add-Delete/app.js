function addItem() {
    const li = document.createElement('li')
    li.textContent = document.querySelector('input').value

    const a = document.createElement('a')
    a.textContent = '[Delete]'
    a.href = '#'

    a.addEventListener('click', e => {
        li.remove()
    })

    li.appendChild(a)

    document.querySelector('ul').appendChild(li)
}