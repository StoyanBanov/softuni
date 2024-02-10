const host = 'http://localhost:3030/jsonstore/forecaster'

const conditionSymbols = {
    'Sunny': '&#x2600;',
    'Partly sunny': '&#x26C5;',
    'Overcast': '&#x2601;',
    'Rain': '&#x2614;',
}

const locationInput = document.getElementById('location'),
    forecastDiv = document.getElementById('forecast')


function attachEvents() {
    document.getElementById('submit').addEventListener('click', async () => {
        const { code } = (await get('/locations')).find(l => l.name = locationInput.value)

        const [current, days] = await Promise.all([
            get('/today/' + code),
            get('/upcoming/' + code)
        ])

        forecastDiv.children[0].innerHTML = currentView(current)
        forecastDiv.children[1].innerHTML = daysView(days.forecast)

        forecastDiv.style.display = 'block'
    })
}

function currentView({ name, forecast: { low, high, condition } }) {
    return `<div class="label">Current conditions</div>
    <div class="forecasts">
        <span class="condition symbol">${conditionSymbols[condition]}</span>
        <span class="condition">
            <span class="forecast-data">${name}</span>
            <span class="forecast-data">${low}&#176;/${high}&#176;</span>
            <span class="forecast-data">${condition}</span>
        </span>
    </div>`
}

function daysView(forecast) {
    return `<div class="label">Three-day forecast</div>
    <div class="forecast-info">
        ${forecast.map(dayView).join('\n')}
    </div>`
}

function dayView({ low, high, condition }) {
    return `<span class="upcoming">
            <span class="symbol">${conditionSymbols[condition]}</span>
            <span class="forecast-data">${low}&#176;/${high}&#176;</span>
            <span class="forecast-data">${condition}</span>
        </span>`
}

async function get(url) {
    return await (await fetch(host + url)).json()
}

attachEvents();