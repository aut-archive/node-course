function Animal() {
}

Animal.prototype.isAnimal = function () {
  return true
}

console.log(Object.create(Animal.prototype))

function Rabbit() {

}

Rabbit.prototype = Object.create(Animal.prototype)

Rabbit.prototype.jumps = function() {
  return true
}

const r = new Rabbit()
console.log(r.isAnimal())

const a = new Animal()
console.log(a.jumps())