function sumTable() {
    document.getElementById('sum').textContent =
        Array.from(document.querySelector('table').querySelectorAll('tr td:nth-child(2)'))
            .slice(0, -1)
            .reduce((t, c) => t + Number(c.textContent), 0)
}