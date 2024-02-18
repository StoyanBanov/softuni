import { get, post } from "../../api.js"
import { manageSubmit, render } from "../../util.js"
import { topicView } from "./topic.js"

export const homeView = async () => {
    const promise = get(`/posts`)

    const main = document.createElement('main')

    main.innerHTML = `<div class="new-topic-border">
                <div class="header-background">
                    <span>New Topic</span>
                </div>
                <form>
                    <div class="new-topic-title">
                        <label for="topicName">Title <span class="red">*</span></label>
                        <input type="text" name="topicName" id="topicName">
                    </div>
                    <div class="new-topic-title">
                        <label for="username">Username <span class="red">*</span></label>
                        <input type="text" name="username" id="username">
                    </div>
                    <div class="new-topic-content">
                        <label for="postText">Post <span class="red">*</span></label>
                        <textarea type="text" name="postText" id="postText" rows="8" class="height"></textarea>
                    </div>
                    <div class="new-topic-buttons">
                        <button class="cancel">Cancel</button>
                        <button class="public">Post</button>
                    </div>

                </form>
            </div>

            <div class="topic-title">

            </div>`

    render(() => main)

    const form = main.querySelector('form')
    form.addEventListener('submit', manageSubmit(createTopic))

    form.querySelector('button').addEventListener('click', e => {
        e.preventDefault()

        Array.from(form.querySelectorAll('input')).map(i => i.value = '')
        form.querySelector('textarea').value = ''
    })

    const data = await promise
    const topics = data.username ? [data] : Object.values(data)

    render(topicView, main.querySelector('.topic-title'), topics)

    async function createTopic(data) {
        Array.from(form.querySelectorAll('input')).map(i => i.value = '')
        form.querySelector('textarea').value = ''

        post('/posts', {
            title: data.topicName,
            username: data.username,
            content: data.postText,
            date: Date.now()
        })

        Array.from(form.querySelectorAll('input')).map(i => i.value = '')
        form.querySelector('textarea').value = ''
    }
}