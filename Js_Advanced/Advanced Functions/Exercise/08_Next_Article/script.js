function getArticleGenerator(articles) {
    return () => {
        if (articles.length == 0) return

        const article = document.createElement('article')
        article.textContent = articles.shift()
        document.getElementById('content').appendChild(article)
    }
}