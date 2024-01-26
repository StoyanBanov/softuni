function attachEventsListeners() {
    const converterToFromSec = {
        'seconds': (n) => n,
        'minutes': (n, isSec) => isSec ? n / 60 : n * 60,
        'hours': (n, isSec) => isSec ? n / 3600 : n * 3600,
        'days': (n, isSec) => isSec ? n / 86400 : n * 86400
    }

    const inputs = document.querySelectorAll(('input[type="text"]'))

    document.body.addEventListener('click', e => {
        if (e.target.value != 'Convert') return

        const input = e.target.parentElement.querySelector('input'),
            convertTo = input.id,
            valInSeconds = converterToFromSec[convertTo](Number(input.value))

        for (const i of inputs) {
            i.value = converterToFromSec[i.id](valInSeconds, true)
        }
    })
}