function solve() {
    const inputs = [...document.querySelectorAll('#container input')]

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault()

        if (inputs.every(i => i.value) && !isNaN(Number(inputs[2].value))) {
            const movie = {
                title: inputs[0].value,
                hall: inputs[1].value,
                price: Number(inputs[2].value)
            }

            const li = document.createElement('li')
            li.innerHTML = `
                    <span>${movie.title}</span>
                    <strong>Hall: ${movie.hall}</strong>
                    <div>
                        <strong>${movie.price.toFixed(2)}</strong>
                        <input placeholder="Tickets Sold"/>
                        <button>Archive</button>
                    </div>
                `
            li.querySelector('button').addEventListener('click', function () {
                let inpVal = li.querySelector('input').value
                if (!inpVal.length) return

                const ticketsSold = Number(inpVal)

                if (!isNaN(ticketsSold)) {
                    li.parentElement.removeChild(li)

                    li.innerHTML = `
                    <span>${movie.title}</span>
                    <strong>Total amount: ${(movie.price * ticketsSold).toFixed(2)}</strong>
                    <button>Delete</button>
                    `

                    li.querySelector('button').addEventListener('click', () => li.remove())

                    document.querySelector('#archive ul').appendChild(li)
                }
            })

            document.querySelector('#movies ul').appendChild(li)

            inputs.forEach(i => {
                i.value = ''
            });
        }
    })

    document.querySelector('#archive>button').addEventListener('click', () => {
        document.querySelector('#archive ul').innerHTML = ''
    })
}