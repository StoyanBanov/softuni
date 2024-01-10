function solve(params) {
    const board =
        [[false, false, false],
        [false, false, false],
        [false, false, false]]

    const [isWin, winPlayer] = play(params)

    console.log(isWin
        ? `Player ${winPlayer} wins!`
        : 'The game ended! Nobody wins :(')

    console.log(board.map(r => r.join('\t')).join('\n'));

    function play(params) {
        let currentPlayer = 'X'

        for (let i = 0; i < params.length; i++) {
            const [y, x] = params[i].split(' ').map(Number)

            if (board[y][x]) {
                console.log("This place is already taken. Please choose another!");
                continue
            }

            board[y][x] = currentPlayer

            if (board.some(r => r.every(c => c == currentPlayer))) {
                return [true, currentPlayer]
            }

            for (let q = 0; q < board[0].length; q++) {
                let isWin = true
                for (let r = 0; r < board.length; r++) {
                    if (board[r][q] != currentPlayer) {
                        isWin = false
                        break
                    }
                }
                if (isWin) return [true, currentPlayer]
            }

            let isWin = true
            for (let j = 0; j < board[0].length; j++) {
                if (board[j][j] != currentPlayer) {
                    isWin = false
                    break
                }
            }

            if (isWin) return [true, currentPlayer]

            isWin = true
            for (let j = 0; j < board[0].length; j++) {
                if (board[j][board[0].length - j - 1] != currentPlayer) {
                    isWin = false
                    break
                }
            }

            if (isWin) return [true, currentPlayer]

            if (board.every(r => r.every(c => c)))
                return [false]

            currentPlayer = currentPlayer == 'X' ? 'O' : 'X'
        }

        return [false]
    }
}

solve(["0 2",
    "0 0",
    "0 2",
    "1 1",
    "1 0",
    "2 0",
    "1 1",
    "2 1",
    "2 2",
    "0 0"])