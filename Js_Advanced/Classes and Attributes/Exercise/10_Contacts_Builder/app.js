class Contact {
    constructor(firstName, lastName, phone, email) {
        this.infoBox = document.createElement('article')
        this.infoBox.innerHTML = `
            <div class="title">${firstName} ${lastName}<button>&#8505;</button></div>
            <div class="info">
                <span>&phone; ${phone}</span>
                <span>&#9993; ${email}</span>
            </div>
        `
        this.infoBox.querySelector('button').addEventListener(
            'click',
            () => {
                this.infoBox.querySelector('.info').style.display =
                    this.infoBox.querySelector('.info').style.display == 'none' ? '' : 'none'
            }
        )
        this.infoBox.querySelector('.info').style.display = 'none'

        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.email = email
        this.online = false
    }

    get online() {
        return this._online
    }

    set online(v) {
        this._online = v

        this.infoBox.querySelector('.title').className = v == false ? 'title' : 'title online'
    }

    render(id) {
        document.getElementById(id).appendChild(this.infoBox)
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
