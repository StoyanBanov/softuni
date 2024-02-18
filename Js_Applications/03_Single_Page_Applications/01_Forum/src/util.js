const container = document.querySelector('.container')

export function manageSubmit(callback) {
    return function (e) {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(this).entries())

        if (Object.values(data).some(d => !d))
            throw new Error('All fields are required!')

        callback(data)
    }
}

export async function render(view, location = container, array) {
    if (array) {
        Array.isArray(array) && location.replaceChildren(...array.map(view))
    }
    else location.replaceChildren(await view())
}