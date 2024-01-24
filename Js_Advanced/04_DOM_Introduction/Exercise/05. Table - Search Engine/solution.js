function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    const rows = Array.from(document.querySelectorAll('tbody tr'))

    const inpSearch = document.getElementById('searchField')

    function onClick() {
        rows.forEach(r =>
            r.className =
            Array.from(r.children).map(r => r.textContent).some(t => t.includes(inpSearch.value))
                ? 'select'
                : ''
        )

        inpSearch.value = ''
    }
}