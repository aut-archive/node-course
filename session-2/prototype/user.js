function User (name, username, email ) {
    this.name = name
    this.username = username
    this.email = email
}

console.log((new User()).valueOf())

console.log(User)
console.log(User.prototype)
console.log((new User()).constructor.name)

let foo = new User('abbas')

// foo.id()

User.prototype.id = function() { 
    return this.username || (this.name + '@google.com')
}

console.log(foo.id())



