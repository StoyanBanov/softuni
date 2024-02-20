export async function setUserData(user) {
    sessionStorage.setItem('token', user.accessToken)
    sessionStorage.setItem('_id', user._id)
}

export async function clearUserData() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('_id')
}

export function manageSubmit(form, callBack) {
    form.addEventListener('submit', e => {
        e.preventDefault()

        const data = Object.fromEntries(new FormData(form))

        if (Object.values(data).some(d => !d))
            throw new Error('All fields are required!')

        callBack(data)
    })
}