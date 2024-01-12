function search() {
    const townLis = document.querySelectorAll('#towns li'),
        searchIn = document.getElementById('searchText')

    let matches = 0
    for (const t of townLis) {
        if (t.textContent.includes(searchIn.value)) {
            t.style.fontWeight = 'bold'
            t.style.textDecoration = 'underline'
            matches++
        }
    }

    document.getElementById('result').textContent = `${matches} matches found`
}
