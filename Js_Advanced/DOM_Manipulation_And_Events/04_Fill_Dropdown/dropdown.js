function addItem() {
    const menu = document.getElementById('menu'),
        [inputText, inputVal] = document.querySelectorAll('input')

    const option = document.createElement('option')
    option.value = inputVal.value
    option.textContent = inputText.value

    menu.appendChild(option)

    inputText.value = ''
    inputVal.value = ''
}