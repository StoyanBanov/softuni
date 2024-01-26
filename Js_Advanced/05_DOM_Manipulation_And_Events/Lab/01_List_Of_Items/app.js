function addItem() {
    const li = document.createElement('li')
    li.textContent = document.querySelector('input').value

    document.querySelector('ul').appendChild(li)
}