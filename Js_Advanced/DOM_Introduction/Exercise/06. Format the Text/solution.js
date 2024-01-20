function solve() {
    const sentences = document.querySelector('textarea').value.split('.').filter(a => a.length).map(s => s + '.')

    const paragraphs = []
    for (let i = 0; i < sentences.length; i += 3) {
        paragraphs.push(
            sentences[i] +
            (sentences[i + 1] || '') +
            (sentences[i + 2] || '')
        )
    }

    document.getElementById('output').innerHTML = paragraphs.map(p => `<p>${p}</p>`)
}