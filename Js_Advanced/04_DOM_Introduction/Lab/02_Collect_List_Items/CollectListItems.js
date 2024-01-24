function extractText() {
    document.getElementById('result').value =
        Array.from(document.getElementsByTagName('li'))
            .map(li => li.textContent)
            .join('\n')
}