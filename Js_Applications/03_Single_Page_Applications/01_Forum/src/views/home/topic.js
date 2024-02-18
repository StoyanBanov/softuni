import { render } from "../../util.js"
import { topicView as topicPageView } from "../topic/topic.js";

export const topicView = (topic) => {
    const div = document.createElement('div')
    div.className = 'topic-container'

    div.innerHTML = `<div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal">
                <h2>${topic.title}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${topic.date && new Date(topic.date).toISOString()}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${topic.username}</span></p>
                    </div>
                </div>


            </div>
        </div>
    </div>`

    div.querySelector('a').addEventListener('click', async e => {
        e.preventDefault()
        await render(() => topicPageView(topic))
    })

    return div
}