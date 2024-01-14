function result(param) {
    switch (param) {
        case 'upvote':
            this.upvotes++
            break;
        case 'downvote':
            this.downvotes++
            break;
        case 'score':
            let rating
            if (this.upvotes + this.downvotes < 10) {
                rating = 'new'
            } else if (this.upvotes > (this.upvotes + this.downvotes) * 0.66) {
                rating = 'hot'
            } else if (this.upvotes - this.downvotes >= 0 && this.upvotes + this.downvotes > 100) {
                rating = 'controversial'
            } else if (this.upvotes - this.downvotes < 0) {
                rating = 'unpopular'
            } else {
                rating = 'new'
            }

            let obfVal = 0
            if (this.upvotes + this.downvotes > 50) {
                obfVal = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25)
            }

            return [
                this.upvotes + obfVal,
                this.downvotes + obfVal,
                this.upvotes - this.downvotes,
                rating
            ]
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

result.call(post, 'upvote');
result.call(post, 'downvote');
console.log(result.call(post, 'score')); // [127, 127, 0, 'controversial']
result.call(post, 'downvote');         // (executed 50 times)
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');         // (executed 50 times)
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');
result.call(post, 'downvote');

console.log(result.call(post, 'score'));