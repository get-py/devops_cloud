// var name = "박예린"
// name = "Merryno"


// 변수
let name = "박예린";
name = "Merryno";


// 상수
const age = 10;
// age = 12; // 상수는 값 변경 불가


console.log("name, age")


const number = 10;

if (number % 2 === 0) {
    console.log("짝수");
}
else {
    console.log("홀수")
}


for (let i = 1; i < 11; i++) {
    console.log(i);
}

for (let i = 1; i < 11; i += 2) {
    console.log(i);
}


// 함수

function mysum(x, y) {
    return x + y;
}

const mysum2 = function (x, y) {
    return x + y;
};

const mysum3 = (x, y) => {
    return x + y;
}


const mysum4 = (x, y) => x + y;


function mysum5(x, y, ...args) {
    console.log(x, y, args);
}

mysum5(1, 2, 3, 4, 5)

function reducer(prevValue, currentValue) {
    return prevValue + currentValue;
}

const result = [1, 2, 3, 4, 5].reduce(reducer, 0);
console.log(result);

const result2 = [1, 2, 3, 4, 5].reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0);
console.log(result2);


const result3 = [1, 2, 3, 4, 5].reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0);
console.log(result3);

