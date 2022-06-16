function check(number) {
    return new Promise((Resolve, reject) => {
        if (number % 2 == 0) {
            Resolve("The number is even")
        }
        else {
            reject("The number is odd")
        }
    })
}

// Exporting check function
module.exports = {
    check: check
};
