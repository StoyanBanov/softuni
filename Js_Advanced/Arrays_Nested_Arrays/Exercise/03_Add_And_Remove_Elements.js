function solve(params) {
    let arr = []

    const commands = {
        add: function (n) { this.push(n) },
        remove: function () { this.pop() }
    }

    let n = 1
    for (const command of params) {
        commands[command].call(arr, n++)
    }

    console.log(arr.length ? arr.join('\n') : 'Empty');
}

solve(['remove',
    'remove',
    'add'])