function fromJSONToHTMLTable(input) {
    const replaceVals = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        ' ': '&nbsp;',
    }

    input = JSON.parse(input)

    const rows = ['<table>']

    input.length && rows.push(createRow(Object.keys(input[0]), 'th'))

    for (const obj of input)
        rows.push(createRow(Object.values(obj), 'td'))

    rows.push('</table>')

    return rows.join('\n')

    function createRow(vals, cellTag) {
        return `\t<tr>${vals.map(v => `<${cellTag}>${escape(v)}</${cellTag}>`).join('')}</tr>`
    }

    function escape(str) {
        if (typeof str != 'string') return str

        return str.replace(/[&<> "]/g, v => replaceVals[v])
    }
}