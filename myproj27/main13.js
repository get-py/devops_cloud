const { melon_data: song_array } = require("./melon");
// TODO: #13 방탄소년단의 곡 중에 좋아요 수가 가장 큰 곡명은?
// Array의 filter와 reduce를 활용해주세요.

Array.prototype.max = function (key_fn) {
    return this.reduce((acc, song) => {
        return key_fn(acc) < key_fn(song) ? song : acc;
    });
};

Array.prototype.min = function (key_fn) {
    return this.reduce((acc, song) => {
        return key_fn(acc) > key_fn(song) ? song : acc;
    });
};

const top_song3 = song_array
    .filter(({ artist }) => artist === "방탄소년단")
    .min(song => song.like);
console.log(top_song3);

const top_song4 = song_array
    .filter(({ artist }) => artist === "방탄소년단")
    .min(song => song.rank);
console.log(top_song4);


// solve 1.

// const top_song = song_array
//     .filter(({ artist }) => artist === "방탄소년단")
//     .reduce((acc, song) => {
//         if (!acc) return song;
//         else if (acc.like < song.like)
//             return song;
//         else
//             return acc;
//     }, null);

// console.log(top_song);


// // solve 2.

// const top_song2 = song_array
//     .filter(({ artist }) => artist === "방탄소년단")
//     .reduce((acc, song) => {
//         return acc.like < song.like ? song : acc;
//     });

// console.log(top_song2);


// // by me
// function isBTS(song) {
//     return song.artist === "방탄소년단";
// }

// const BTS_song_array = song_array.filter(isBTS);
// const BTS_song_like = BTS_song_array.map(song => song.like);

// const max_like = BTS_song_like.reduce((previous, current) => {
//     return previous > current ? previous : current;
// });

// for (const song of BTS_song_array) {
//     if (song.like == max_like) {
//         console.log(song.title, song.like);
//     }
// }




