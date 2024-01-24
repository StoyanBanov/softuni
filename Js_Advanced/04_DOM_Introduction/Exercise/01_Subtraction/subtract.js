function subtract() {
    document.getElementById('result').textContent =
        getNumFromInpId('firstNumber') - getNumFromInpId('secondNumber')

    function getNumFromInpId(id) {
        return Number(document.getElementById(id).value)
    }
}