function extract(content) {
    return document.getElementById(content).textContent
        .match(/\([^)]+\)/gm)
        .join(';')
}