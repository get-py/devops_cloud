const { melon_data: song_array } = require("./melon");
// TODO: #7 방탄소년단의 곡명 문자열로 구성된 배열을 구성해주세요.
// Array의 filter와 map 활용
// 출력포맷 : [곡명1, 곡명2, 곡명3]

// solve1.
const bts_title_array = song_array
    .filter(({ artist }) => artist === "방탄소년단")
    .map(({ title }) => title);
console.log(bts_title_array);

// solve2.






// reduce 설명
const numbers = [1, 2, 3, 4, 5]

const new_numbers_object = numbers.reduce((acc, number) => {
    acc[number] = number * number;
    return acc;
}, {});
console.log(new_numbers_object);





const new_numbers = numbers.map(number => number * number)
console.log(new_numbers);


const new_numbers2 = numbers.reduce((acc, number) => {
    acc.push(number * number);
    return acc;
}, []);
console.log(new_numbers2);




const result_sum = numbers.reduce((acc, number) => {
    acc += number;
    return acc;
}, 0)

console.log(`합: ${result_sum}`);




// //////////////////////////////
// function isBTS(song) {
//     return song.artist === "방탄소년단";
// }

// const BTS_song_array = song_array.filter(isBTS);


// BTS_song = [];
// for (const song of BTS_song_array) {
//     BTS_song.push(song.title);
// }
// console.log(BTS_song);