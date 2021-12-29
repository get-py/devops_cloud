const { melon_data: song_array } = require("./melon");
// TODO: #8 곡명에 "사랑"이 포함된 곡들의 곡명 배열을 구성해주세요.
// Array의 filter와 map 활용
// 출력포맷 : [곡명1, 곡명2, 곡명3]


song_array
    .filter(
        ({ title }) => title.includes("사랑")
    )
    .map(
        ({ title }) => title);

console.log(song_array);


//////////////////////////

// const song_title = song_array.map(song => song.title);


// const love_song = []

// for (const song of song_title) {
//     if (song.indexOf("사랑") > -1) {
//         love_song.push(song)
//     }
// }

// console.log(love_song);