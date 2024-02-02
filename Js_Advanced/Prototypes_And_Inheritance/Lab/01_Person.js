function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName
    }

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`
        },
        set(val) {
            const [f, l] = val.split(' ')

            if ([f, l].some(v => !v)) return

            [this.firstName, this.lastName] = [f, l]
        }
    })

    return result
}

