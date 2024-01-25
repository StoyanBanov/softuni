function colorize() {
    for (const row of document.querySelectorAll('tr:nth-child(even)'))
        row.style.backgroundColor = 'Teal'
}