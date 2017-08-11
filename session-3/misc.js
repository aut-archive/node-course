// const axios = require('axios')


// function get() {
//     let resolveCbs = []
//     this.then = (cb) => resolveCbs.push(cb)

//     setTimeout(() => {
//         resolveCbs.forEach(cb => {
//             cb(123)
//         })
//     }, 2000)

//     return this
// }


// async function main() {
//     console.log('Get ...')
//     // get().then(r => {
//     //     console.log(r)
//     // })
//     let r = await get()
//     console.log(r)
// }


// main()



const { calc } = require('./testModule')



console.log(calc(1,2))

let student = {
    name: 'Taghi',
    family: 'Ali'
}

let str = JSON.stringify(student)
console.log(typeof str, str)

let obj = JSON.parse(str)
console.log(typeof obj, obj)

