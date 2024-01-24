function calculator() {
    return {
        init(selector1, selector2, resultSelector) {
            this.a = document.querySelector(selector1)
            this.b = document.querySelector(selector2)
            this.res = document.querySelector(resultSelector)
        },
        add() {
            this.res.value = Number(this.a.value) + Number(this.b.value)
        },
        subtract() {
            this.res.value = Number(this.a.value) - Number(this.b.value)
        }
    }
}