function solve() {
    const table = document.querySelector('table'),
        check = document.querySelector('#check p')

    document.querySelector('tfoot td').addEventListener('click', e => {
        if (e.target.textContent == 'Quick Check') {
            const matrix = Array.from(table.querySelectorAll('tbody tr'))
                .map(tr => Array.from(tr.querySelectorAll('input')).map(i => i.value))

            console.log(matrix);

            let isOk = true

            for (let i = 0; i < matrix.length; i++) {
                const vals = new Set()
                for (let j = 0; j < matrix.length; j++) {
                    vals.add(matrix[j][i])
                }

                if (vals.size != matrix.length)
                    isOk = false
            }

            isOk = isOk && matrix.every(r => new Set(r).size == r.length)

            const color = isOk ? 'green' : 'red'
            table.style.border = `2px solid ${color}`
            check.style.color = color

            check.textContent = isOk
                ? "You solve it! Congratulations!"
                : "NOP! You are not done yet..."

        } else {
            for (const inp of document.querySelectorAll('input')) {
                inp.value = ''
            }

            table.style.border = 'none'
            check.textContent = ''
        }
    })
}