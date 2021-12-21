const fs = require("fs");
const fsPromises = fs.promises;

// 3. await 는 promise 문법에 대한 축약

async function main() {
    try {
        const files = await fsPromises.readdir("c:/Dev");
        console.log("loaded : ", files);
    }
    catch (error) {
        console.error(error);
    }
}
main();

// 2: Promise

// fsPromises.readdir("c:/Dev33")
//     .then(function (files) {
//         console.log("loaded :", files);
//     })
//     .catch(function (error) {
//         console.error(error);
//     });



// 1.

// fs.readdir("c:/Dev", function (err, files) {
//     if (err) {
//         console.error(err);
//     }
//     else {
//         console.log(files);
//     }
// })

console.log("ended");