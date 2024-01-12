function calc(totalSteps, printLengthM, speedKmH) {
    const distKm = (totalSteps * printLengthM) / 1000

    const timeS = distKm / speedKmH * 3600 + Math.floor(distKm / 0.5) * 60

    const timeH = timeS / 3600, h = Math.floor(timeH) || '00'
    const timeM = (timeH - h) * 60, m = Math.floor(timeM) || '00'
    const s = Math.round((timeM - m) * 60) || '00'

    console.log(`${format(h)}:${format(m)}:${format(s)}`);

    function format(n) {
        return n >= 10 ? n : n >= 1 ? '0' + n : '00'
    }
}

calc(4000, 0.6, 5)