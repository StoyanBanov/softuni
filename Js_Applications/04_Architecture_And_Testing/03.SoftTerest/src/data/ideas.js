import * as api from "./api.js"

const endpoint = '/data/ideas'

export async function getIdeas() {
    return api.get(endpoint + '?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc')
}

export async function getIdeaById(id) {
    return api.get(endpoint + '/' + id)
}

export async function addIdea({ title, description, imageURL }) {
    if (
        title.length < 6
        || description.length < 10
        || imageURL.length < 5
    ) throw new Error('Invalid input!')

    return api.post(endpoint, {
        title,
        description,
        img: imageURL
    })
}

export async function editIdea(id, data) {
    return api.put(endpoint + '/' + id, data)
}

export async function deleteIdea(id) {
    return api.del(endpoint + '/' + id)
}