
// console.log(JSON.stringify(person))

// console.log(person['firstName'])

// Object.values(person).forEach((e) => {
//     console.log(e)
// })

function Person(firstName, lastName, birthPlace) {
    this.firstName = firstName
    this.lastName = lastName
    this.name = () => {
        this.firstName + this.lastName
    }
}

// console.log(Person("1", "2", 1393))

// let me = new Person("Iman", "Tabrizian", "Tehran")
let person = {
    name: {first: "Iman", last: "Tabrizian"},
    fullName: function() {
        return this.name.first + ' ' + this
    }
}
console.log(person.name.first)
console.log(JSON.stringify(person))
me.age = 18
me.calculatedAttribute = () => {
    return "Hello World!"
};

console.log(me.calculatedAttribute())
let field = "firstName"

console.log(me[field])
console.log(me)