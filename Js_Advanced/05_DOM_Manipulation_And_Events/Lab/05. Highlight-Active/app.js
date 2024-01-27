function focused() {
    for (const inp of document.querySelectorAll('input')) {
        inp.addEventListener('focus', focusHandler)
        inp.addEventListener('blur', focusHandler)
    }

    function focusHandler(e) {
        e.target.parentElement.className =
            e.type == 'focus' ? 'focused' : ''
    }
}