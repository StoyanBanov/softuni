function attachEvents() {
    const postsSelect = document.getElementById('posts'),
        postH1 = document.getElementById('post-title'),
        postP = document.getElementById('post-body'),
        commentsUl = document.getElementById('post-comments'),
        host = 'http://localhost:3030/jsonstore/blog'

    let posts

    document.getElementById('btnLoadPosts').addEventListener('click', async () => {
        posts = await get('/posts')

        postsSelect.innerHTML = ''
        for (const [k, v] of Object.entries(posts)) {
            postsSelect.appendChild(makePostOption(k, v.title))
        }
    })

    document.getElementById('btnViewPost').addEventListener('click', async () => {
        const [post, comments] = await Promise.all([get('/posts/' + posts[postsSelect.value].id), get('/comments')])

        postH1.textContent = post.title
        postP.textContent = post.body

        commentsUl.innerHTML = ''
        for (let c of Object.values(comments).filter(c => c.postId == post.id)) {
            commentsUl.appendChild(makeCommentLi(c.text))
        }
    })

    function makePostOption(value, text) {
        const option = document.createElement('option')
        option.value = value
        option.text = text
        return option
    }

    function makeCommentLi(text) {
        const li = document.createElement('li')
        li.textContent = text
        return li
    }

    async function get(url) {
        return (await fetch(host + url)).json()
    }
}


// version for judge

// function attachEvents() {
//     const postsSelect = document.getElementById('posts'),
//         postH1 = document.getElementById('post-title'),
//         postP = document.getElementById('post-body'),
//         host = 'http://localhost:3030/jsonstore/blog'

//     let posts

//     document.getElementById('btnLoadPosts').addEventListener('click', async () => {
//         posts = await get('/posts')

//         postsSelect.innerHTML = ''
//         for (const p of posts) {
//             postsSelect.appendChild(makePostOption(p.id, p.title))
//         }
//     })

//     document.getElementById('btnViewPost').addEventListener('click', async () => {
//         const post = posts.find(p => p.id == postsSelect.value)

//         postH1.textContent = post.title
//         postP.textContent = post.body
//     })

//     function makePostOption(value, text) {
//         const option = document.createElement('option')
//         option.value = value
//         option.text = text
//         return option
//     }

//     async function get(url) {
//         return (await fetch(host + url)).json()
//     }
// }

attachEvents();