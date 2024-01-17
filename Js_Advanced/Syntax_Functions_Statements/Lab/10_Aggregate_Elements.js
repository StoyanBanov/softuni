(arr) => {
    console.log(arr.reduce((t, c) => t + c));
    console.log(arr.reduce((t, c) => t + 1 / c, 0));
    console.log(arr.join(''));
}