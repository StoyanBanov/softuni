function solution(params) {
    let list = [],
        obj = {
            add(str) {
                list.push(str)
            },
            remove(str) {
                list = list.filter(s => s != str)
            },
            print() {
                console.log(list.join(','));
            }
        }

    for (const prm of params) {
        const [cmnd, val] = prm.split(' ')
        obj[cmnd](val)
    }
}