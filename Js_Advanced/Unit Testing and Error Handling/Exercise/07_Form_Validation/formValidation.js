function validate() {
    const inputs = [...document.querySelectorAll('input')].reduce((t, i) => {
        t[i.id] = i
        return t
    }, {})

    inputs.company.addEventListener('change', function () {
        document.getElementById('companyInfo').style.display = this.checked ? '' : 'none'
    })

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault()

        let isFormValid = true

        if (inputs.username.value.length < 3 || inputs.username.value.length > 20 || /[^a-zA-Z0-9]/.test(inputs.username.value)) {
            isFormValid = false
            applyBorder(inputs.username, false)
        } else applyBorder(inputs.username, true)

        if (inputs.password.value.length < 5 || inputs.password.value.length > 15 || /[^\w]/.test(inputs.password.value) || inputs.password.value != inputs['confirm-password'].value) {
            isFormValid = false
            applyBorder(inputs.password, false)
        } else applyBorder(inputs.password, true)

        if (inputs['confirm-password'].value.length < 5 || inputs['confirm-password'].value.length > 15 || /[^\w]/.test(inputs['confirm-password'].value) || inputs.password.value != inputs['confirm-password'].value) {
            isFormValid = false
            applyBorder(inputs['confirm-password'], false)
        } else applyBorder(inputs['confirm-password'], true)

        if (!inputs.email.value.includes('@') || inputs.email.value.indexOf('@') != inputs.email.value.lastIndexOf('@') || !inputs.email.value.includes('.') || inputs.email.value.indexOf('.') < inputs.email.value.indexOf('@')) {
            isFormValid = false
            applyBorder(inputs.email, false)
        } else applyBorder(inputs.email, true)

        if (inputs.company.checked) {
            if (Number(inputs.companyNumber.value) < 1000 || Number(inputs.companyNumber.value) > 9999) {
                isFormValid = false
                applyBorder(inputs.companyNumber, false)
            } else applyBorder(inputs.companyNumber, true)

        }

        document.getElementById('valid').style.display = isFormValid ? 'block' : 'none'
    })

    function applyBorder(field, isValid) {
        isValid
            ? field.style.border = 'none'
            : field.style['border-color'] = 'red'
    }
}