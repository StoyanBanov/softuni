function validate() {
    document.getElementById('email').addEventListener('change', function () {
        this.className = /[a-z]+@[a-z]+.[a-z]+/g.test(this.value)
            ? '' : 'error'
    })
}