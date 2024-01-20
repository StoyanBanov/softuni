function generateReport() {
    const columnIndexes = [...document.querySelectorAll('input')]
        .map((c, i) => ({ c, i }))
        .filter(a => a.c.checked)

    document.getElementById('output').value = JSON.stringify(
        Array.from(document.querySelector('tbody').children).map(r => {
            return columnIndexes.reduce((o, a) => {
                let val = r.children[a.i].textContent
                //!isNaN(Number(val)) && (val = Number(val))
                o[a.c.name] = val
                return o
            }, {})
        }), null, 2
    )
}