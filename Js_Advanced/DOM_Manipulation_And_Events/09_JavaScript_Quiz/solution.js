function solve() {
    const sections = document.querySelectorAll('section'),
        result = document.querySelector('#results')

    let count = 0, rightAnswers = 0
    document.getElementById('quizzie').addEventListener('click', e => {
        const answer = e.target.textContent

        switch (answer) {
            case 'onclick':
            case 'JSON.stringify()':
            case 'A programming API for HTML and XML documents':
                rightAnswers++
                break;
        }

        sections[count].style.display = 'none'

        count++
        console.log(count);

        if (count == 3) {
            result.style.display = 'block'
            result.querySelector('h1').textContent =
                rightAnswers == 3
                    ? 'You are recognized as top JavaScript fan!'
                    : `You have ${rightAnswers} right answers`
        } else
            sections[count].style.display = 'block'
    })
}
