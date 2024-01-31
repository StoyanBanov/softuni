function validate(request) {
    if (!['GET', 'POST', 'DELETE', 'CONNECT'].includes(request.method))
        throw new Error(`Invalid request header: Invalid Method`)

    if (request.uri != '*') {
        if (!request.uri || /[^a-zA-Z1-9\.]/.test(request.uri))
            throw new Error(`Invalid request header: Invalid URI`)
    }

    if (!['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'].includes(request.version))
        throw new Error(`Invalid request header: Invalid Version`)

    if (!request.hasOwnProperty('message') || /[<>\\&'"]/.test(request.message))
        throw new Error(`Invalid request header: Invalid Message`)

    return request
}

console.log(validate({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));