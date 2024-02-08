const stopIdInput = document.getElementById('stopId'),
    stopNameDiv = document.getElementById('stopName'),
    busesUl = document.getElementById('buses')

async function getInfo() {
    try {
        const stop = await (await fetch('http://localhost:3030/jsonstore/bus/businfo/' + stopIdInput.value)).json()

        stopNameDiv.textContent = stop.name

        busesUl.innerHTML = Object.entries(stop.buses)
            .map(([k, v]) => `<li>Bus ${k} arrives in ${v} minutes</li>`)
            .join('\n')
    } catch (error) {
        stopNameDiv.textContent = 'Error'
    }
}