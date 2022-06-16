// Importing check function
const promise = require("./FirstModule.js")

// Promise handling
promise.check(7).then((msg) => {
    console.log(msg)
}).catch((msg) => {
    console.log(msg)
})
