function attachEventsListeners() {
    const convertToFromMm = {
        'mm': (n) => n,
        'cm': (n, isMm) => isMm ? n / 10 : n * 10,
        'm': (n, isMm) => isMm ? n / 1000 : n * 1000,
        'km': (n, isMm) => isMm ? n / 1000000 : n * 1000000,
        'in': (n, isMm) => isMm ? n / 25.4 : n * 25.4,
        'ft': (n, isMm) => isMm ? n / 304.8 : n * 304.8,
        'yrd': (n, isMm) => isMm ? n / 914.4 : n * 914.4,
        'mi': (n, isMm) => isMm ? n / 1609344 : n * 1609344
    }

    const [inp, out] = document.querySelectorAll('select'),
        inDist = document.getElementById('inputDistance'),
        outDist = document.getElementById('outputDistance')

    document.getElementById('convert').addEventListener('click', function () {
        const mm = convertToFromMm[inp.value](Number(inDist.value))

        console.log(mm, out.value);

        outDist.value = convertToFromMm[out.value](mm, true)
    })
}