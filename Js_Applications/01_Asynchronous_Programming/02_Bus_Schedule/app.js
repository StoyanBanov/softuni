function solve() {
    const infoBox = document.querySelector('.info'),
        departBtn = document.getElementById('depart'),
        arriveBtn = document.getElementById('arrive')

    let stop = { next: 'depot' }

    async function depart() {
        stop = await (await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`)).json()

        infoBox.textContent = `Next stop ${stop.name}`

        departBtn.disabled = true
        arriveBtn.disabled = false
    }

    function arrive() {
        infoBox.textContent = `Arriving at ${stop.name}`

        arriveBtn.disabled = true
        departBtn.disabled = false
    }

    return {
        depart,
        arrive
    };
}

let result = solve();