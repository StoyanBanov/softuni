function validate() {
    document.getElementById('email').addEventListener('change', function () {
        this.className = /[a-z]+\@[a-z]+\.[a-z]+/.test(this.value) ? '' : 'error'
    })
}