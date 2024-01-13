function encodeAndDecodeMessages() {
    const [inp, out] = document.querySelectorAll('textarea')

    document.querySelector('main').addEventListener('click', e => {
        if (e.target.tagName != 'BUTTON') return

        out.value = e.target.textContent == 'Encode and send it'
            ? changeCharsByNumber(inp.value, 1)
            : changeCharsByNumber(out.value, -1)

        inp.value = ''

    })

    function changeCharsByNumber(str, n) {
        return str.split('')
            .map(c => String.fromCharCode(c.charCodeAt(0) + n)).join('')
    }
}