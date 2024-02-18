const host = 'http://localhost:3030/jsonstore/collections/myboard'

async function request(method, url, body) {
    const options = { method, headers: {} }

    if (body) {
        options.headers['content-type'] = 'application/json'
        options.body = JSON.stringify(body)
    }

    const response = await fetch(host + url, options)

    if (!response.ok)
        throw new Error('Error!')

    try {
        return await response.json()
    } catch (error) {
        console.log(response);
        return response
    }
}

export const get = request.bind(null, 'get')
export const post = request.bind(null, 'post')
export const put = request.bind(null, 'put')
export const del = request.bind(null, 'delete')