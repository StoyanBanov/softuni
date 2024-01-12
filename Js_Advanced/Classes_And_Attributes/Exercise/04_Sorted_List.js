class List {
    constructor() {
        this.elements = []
        this.size = 0
    }

    add(element) {
        this.elements.push(element)
        this.size++

        this.sort()
    }

    remove(index) {
        this.validateIndex(index)

        this.elements.splice(index, 1)
        this.size--

        this.sort()
    }

    get(index) {
        this.validateIndex(index)
        return this.elements[index]
    }

    validateIndex(index) {
        if (index < 0 || index >= this.size) throw new Error()
    }

    sort() {
        this.elements.sort((a, b) => a - b)
    }
}