import { get, post } from "../../api.js"
import { manageSubmit, render } from "../../util.js"
import { postView } from "./post.js"

export const topicView = async (topic) => {
    //const data = await get(`/comments`)
    const comments = []//data.username ? [data] : Object.values(data).filter(c => c.postId == topic._id)

    const div = document.createElement('div')
    div.className = 'theme-content'

    div.innerHTML = `<!-- theme-title  -->
            <div class="theme-title">
                <div class="theme-name-wrapper">
                    <div class="theme-name">
                        <h2>${topic.title}</h2>

                    </div>

                </div>
            </div>
            <!-- comment  -->

            <div class="comment">
                <div class="header">
                    <img src="./static/profile.png" alt="avatar">
                    <p><span>${topic.username}</span> posted on <time>${topic.date && new Date(topic.date).toDateString()}</time></p>

                    <p class="post-content">${topic.content}</p>
                </div>


            </div>

            <div class="answer-comment">
                <p><span>currentUser</span> comment:</p>
                <div class="answer">
                    <form>
                        <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                        <div>
                            <label for="username">Username <span class="red">*</span></label>
                            <input type="text" name="username" id="username">
                        </div>
                        <button>Post</button>
                    </form>
                </div>
            </div>`

    const frag = document.createDocumentFragment()
    render(postView, frag, comments)
    div.querySelector('.header').appendChild(frag)

    div.querySelector('form').addEventListener('submit', manageSubmit(createComment))

    return div

    async function createComment(data) {
        await post('/comments', {
            postId: topic._id,
            username: data.username,
            text: data.postText,
            date: Date.now()
        })

        await render(() => topicView(topic))
    }
}