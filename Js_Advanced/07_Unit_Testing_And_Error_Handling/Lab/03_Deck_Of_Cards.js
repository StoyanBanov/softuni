function printDeck(params) {
    try {
        console.log(params.map(p => createCard(p.slice(0, -1), p.slice(-1))).join(' '))
    } catch (error) {
        console.log(`Invalid card: ${error.message}`);
    }

    function createCard(face, suit) {
        const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
            suitsUTF = {
                'S': '\u2660',
                'H': '\u2665',
                'D': '\u2666',
                'C': '\u2663'
            }

        if (!validCardFaces.includes(face) || !suitsUTF.hasOwnProperty(suit))
            throw new Error(face + suit)

        return {
            face,
            suit,
            toString() {
                return this.face + suitsUTF[this.suit]
            }
        }
    }
}