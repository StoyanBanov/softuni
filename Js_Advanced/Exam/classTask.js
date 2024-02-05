class BookClub {
    constructor(library) {
        this.library = library
        this.books = []
        this.members = []
    }

    addBook(title, author) {
        const existing = this.books.find(b => b.title == title && b.author == author)

        if (existing)
            return `The book "${title}" by ${author} is already in ${this.library} library.`

        this.books.push({ title, author })

        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }

    addMember(memberName) {
        if (this.members.includes(memberName))
            return `Member ${memberName} is already a part of the book club.`

        this.members.push(memberName)

        return `Member ${memberName} has been joined to the book club.`
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName))
            throw new Error(`Member ${memberName} not found."`)

        const existingBookIndex = this.books.findIndex(b => b.title == bookTitle)

        if (existingBookIndex == -1)
            throw new Error(`Book "${bookTitle}" not found.`)

        const existingBook = this.books.splice(existingBookIndex, 1)[0]

        return `Member ${memberName} has been assigned the book "${existingBook.title}" by ${existingBook.author}.`
    }

    generateReadingReport() {
        if (!this.members.length)
            return "No members in the book club."

        if (!this.books.length)
            return "No available books in the library."

        return `Available Books in ${this.library} library:\n${this.books.map(b => `"${b.title}" by ${b.author}`).join('\n')}`
    }
}