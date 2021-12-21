const tom = {
    name: "Tom",
    age: 10,
    region: "Daejeon"
}

// 키명과 저장할 변수명이 같은 경우
// const { name, age } = tom;
// console.log(name, age);

// const { name: otherName } = tom;
// console.log(otherName);

const steve = {
    name: {
        first: "Steve",
        last: "Jobs",
    },
    age: 10,
    region: "Daejeon"
}
const { name } = steve;
console.log(name);

const { name: { first } } = steve;
console.log(first);

const { name: { first: firstName } } = steve;
console.log(firstName);