function deleteByEmail() {
    if (
        match = Array
            .from(document.querySelectorAll('tr td:nth-child(2)'))
            .find(td => td.textContent == document.querySelector('input').value)
    ) match.parentElement.remove()

    document.getElementById('result').textContent = match ? 'Deleted.' : 'Not found.'
}