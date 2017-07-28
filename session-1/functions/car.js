function makeToyota (theObject) {
  theObject.make = 'Toyota'
}

let mycar = {
  make: 'Honda',
   model: 'Accord',
    year: 1998
}

console.log(mycar.make)

// Call function
makeToyota(mycar)

// y gets the value "Toyota"
// Now the make property was changed by the function...
console.log(mycar.make)
