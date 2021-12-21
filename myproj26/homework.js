const { question } = require("readline-sync");

const animal_names = [
    "cat",
    "dog",
    "fox",
    "monkey",
    "mouse",
    "panda",
    "frog",
    "snake",
    "wolf",
];


// 1. shuffle
const shuffle_animal_names = animal_names
    .map((name) => ({
        name: name,
        value: Math.random(),
    }))
    .sort((obj_a, obj_b) => {
        return obj_a.value - obj_b.value;
    })
    .map(({ name }) => name);


const begin_time = new Date().getTime();
let ok_counter = 0;

// 2. slicing
for (const animal_name of shuffle_animal_names.slice(0, 5)) {
    const line = question(`${animal_name} >>> `)
    if (line === animal_name) {
        ok_counter++;
    }
}


const end_time = new Date().getTime();

const time = end_time - begin_time;
console.log(`총 ${time / 1000}초가 소요되었습니다`)
console.log(`총 ${ok_counter}회 맞추셨습니다.`)



// // 3. input 받기
// // readline-sync 라이브러리 설치
// // 소스코드가 있는 폴더까지 이동해서
// // npm readline-sync
