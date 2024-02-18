export const postView = (post) => {
    const div = document.createElement('div')
    div.className = 'user-comment'

    div.innerHTML = `<div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${post.username}</strong> commented on <time>${post.date && new Date(post.date).toDateString()}</time></p>
                <div class="post-content">${post.text}</p>
                </div>
            </div>
        </div>`

    return div
}