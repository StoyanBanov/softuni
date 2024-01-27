function solve() {
    const txtArea = document.querySelector('textarea'),
        items = {}

    document.querySelector('.shopping-cart').addEventListener('click', onClick)

    function onClick({ target }) {
        if (target.tagName != 'BUTTON') return

        if (target.className == 'add-product') {
            const name = selectFromGrandParent(target, '.product-title'),
                price = Number(selectFromGrandParent(target, '.product-line-price'))

            items[name] = (items[name] || 0) + price

            txtArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
        } else {
            txtArea.value += `You bought ${Object.keys(items).join(', ')} for ${getTotalPrice().toFixed(2)}.`

            this.removeEventListener('click', onClick)
        }
    }

    function selectFromGrandParent(child, selector) {
        return child.parentElement.parentElement.querySelector(selector).textContent
    }

    function getTotalPrice() {
        return Object.values(items).reduce((t, c) => t + c, 0)
    }
}