function solve() {
    const textArr = document.getElementById('text').value.toLowerCase().split(' '),
        convention = document.getElementById('naming-convention').value

    let result
    switch (convention) {
        case 'Camel Case':
            result = textArr[0].toLowerCase() + toPascalCase(textArr.slice(1))
            break;
        case 'Pascal Case':
            result = toPascalCase(textArr)
            break;
        default:
            result = 'Error!'
            break;
    }

    document.getElementById('result').textContent = result

    function toPascalCase(words) {
        return words.map(capitalize).join('')
    }

    function capitalize(word) {
        return word[0].toUpperCase() + word.substring(1)
    }
}