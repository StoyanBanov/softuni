function solve() {
    const selectFrom = document.getElementById('selectMenuTo')
    selectFrom.innerHTML = `
         <option selected value="binary">Binary</option>
         <option selected value="hexadecimal">Hexadecimal</option>
    `

    document.querySelector('button').addEventListener('click', function () {
        document.getElementById('result').value =
            Number(document.getElementById('input').value).toString(selectFrom.value == 'binary' ? 2 : 16).toUpperCase()
    })
}