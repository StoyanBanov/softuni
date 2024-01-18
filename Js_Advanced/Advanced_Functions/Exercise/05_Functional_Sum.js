function add(n) {
    this.sum = n

    function calc(n1) { return add(n1 + n) }

    calc.toString = () => this.sum

    return calc
}