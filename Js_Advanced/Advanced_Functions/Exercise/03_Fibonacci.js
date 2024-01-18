function getFibonator() {
    let prev = 0, curr = 1

    return () => {
        const val = curr

        curr = prev + curr
        prev = val

        return val
    }
}

let fib = getFibonator()

console.log(fib());

console.log(fib());

console.log(fib());

console.log(fib());
