(text => {
    const words = [], reg = RegExp('[a-zA-Z0-9]+', 'g')

    while ((w = reg.exec(text))) {
        words.push(w[0].toUpperCase())
    }

    return words.join(', ')
})('123')