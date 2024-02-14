const host = 'http://localhost:3030'

async function request(method, url, body) {
    const options = { method, headers: {} }

    if (body) {
        options.headers['content-type'] = 'application/json'
        options.body = JSON.stringify(body)
    }

    const token = sessionStorage.getItem('token')
    if (token) options.headers['x-authorization'] = token

    const response = await fetch(host + url, options)

    if (!response.ok)
        throw new Error('error')

    try {
        return await response.json()
    } catch (error) {
        return response
    }
}

export const get = request.bind(null, 'get')
export const post = request.bind(null, 'post')
export const put = request.bind(null, 'put')
export const del = request.bind(null, 'delete')