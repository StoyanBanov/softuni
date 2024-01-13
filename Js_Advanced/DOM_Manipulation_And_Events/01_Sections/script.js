function create(words) {
    const contentDiv = document.getElementById('content')

    words.forEach(w => {
        contentDiv.appendChild(createDiv(w))
    });

    function createDiv(word) {
        const div = document.createElement('div')
        const p = document.createElement('p')
        p.textContent = word
        p.style.display = 'none'
        div.appendChild(p)

        div.addEventListener('click', () => {
            p.style.display = 'block'
        })

        return div
    }
}