const { melon_data: song_array } = require("./melon");
// TODO: #6 "곡명 / 단어수" 배열을 구성해주세요.
// Array의 map 활용
// 100줄에서 한 줄 출력의 예: `Dynamite / 1`



// const title = song_array.map(Object.title(song_array));

// console.log(title);



for (const song of song_array) {
    let title = song.title
    var count = 1;
    var searchChar = ' ';
    var pos = title.indexOf(searchChar);

    while (pos !== -1) {
        count++;
        pos = title.indexOf(searchChar, pos + 1);
    }
    console.log(song.title, count);
}


// var title = song.title{for(const song of song_array)};
// console.log(title);













// let song_word_count = song_array.map(function (obj) {
//     let rObj = {};
//     rObj[obj.title] = obj.title.count();
//     return rObj;
// });

// console.log(song_word_count);

// for (const song of song_array) {
//     console.log(song.title,)
// }