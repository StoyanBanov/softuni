function notify(message) {
    const notification = document.getElementById('notification')
    notification.addEventListener('click', function () {
        this.style.display = 'none'
    })

    notification.style.display = 'block'
    notification.textContent = message
}