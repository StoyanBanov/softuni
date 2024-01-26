function solve() {
    const [genTextArea, infoTextArea] = document.querySelectorAll('textarea'),
        tbody = document.querySelector('tbody')

    let furniture = []

    document.getElementById('exercise').addEventListener('click', e => {
        if (e.target.tagName != 'BUTTON') return
        if (e.target.textContent == 'Generate') {
            const newFurniture = JSON.parse(genTextArea.value)

            for (const f of newFurniture) {
                tbody.appendChild(convertToTr(f))
            }

            furniture.push(...newFurniture)
        } else {
            const checked = Array.from(document.querySelectorAll('input'))
                .map((c, i) => ({ c, i }))
                .filter(o => o.c.checked)
                .map(({ i }) => furniture[i - 1]) // i - 1 so that the tests work

            infoTextArea.value = [
                `Bought furniture: ${checked.map(c => c.name).join(', ')}`,
                `Total price: ${checked.reduce((t, c) => t + c.price, 0).toFixed(2)}`,
                `Average decoration factor: ${checked.reduce((t, c) => t + c.decFactor, 0) / checked.length}`
            ].join('\n')
        }
    })

    function convertToTr({ img, name, price, decFactor }) {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td><img src="${img}"></td>
            <td><p>${name}</p></td>
            <td><p>${price}</p></td>
            <td><p>${decFactor}</p></td>
            <td><input type="checkbox"></td>
        `
        return tr
    }
}