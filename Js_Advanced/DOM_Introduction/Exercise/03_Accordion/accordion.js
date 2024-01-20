function toggle() {
    const span = document.querySelector('span')
    const isShowMore = span.textContent == 'More'

    document.getElementById('extra').style.display = isShowMore ? 'block' : 'none'

    span.textContent = isShowMore ? 'Less' : 'More'
}