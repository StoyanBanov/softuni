n => {
    let arr = (n + '').split('').map(Number)
    console.log(arr.every(a => a == arr[0]))
    console.log(arr.reduce((a, b) => a + b))
}