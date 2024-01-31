function solution() {
    let str = ''
    return {
        append: (ap) => str += ap,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    }
}