// let capitalJoin = function (a) {
//     return function(b) {
//         return a + b[0].toUpperCase() + b.substr(1)
//     }
// }

// let keys = Object.keys(currencyMap).map(capitalJoin('to'))
//console.log(keys)

// keys.forEach(key => {
//     convert[key] = (value, from = 'usd') => convertCurrency(value, key)
// })


const currencyMap = {
    usd: 1,
    irr: 4000,
    xyz: 1500
}

let capitalJoin = a => b => a + b[0].toUpperCase() + b.substr(1) 
let addTo = capitalJoin('to')


let convert = {}
Object.keys(currencyMap).forEach(key => {
    convert[addTo(key)] = function (value, from = 'usd') {
        return convertCurrency(value, key, from)
    }
})

// console.log(convert.toIrr(1000))

// console.log(convertCurrency(1000, 'irr'))

function convertCurrency(value, to = 'usd', from = 'usd') {
    let convRate = currencyMap[to] / currencyMap[from]
    return value * convRate
}

// https://nodejs.org/api/modules.html
// console.log(__filename)
// console.log(__dirname)

//module.exports
//let exports = module.exports

module.exports = convert
//exports.toIrr = convert.toIrr