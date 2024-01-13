function lockedProfile() {
    document.querySelector('main').addEventListener('click', e => {
        if (e.target.tagName != 'BUTTON' ||
            e.target.parentElement.querySelector('input').checked
        ) return

        const isHidden = e.target.textContent == 'Show more'

        e.target.parentElement.querySelector('div').style.display =
            isHidden ? 'block' : 'none'

        e.target.textContent = isHidden ? 'Hide it' : 'Show more'
    })
}