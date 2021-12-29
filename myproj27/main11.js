const { melon_data: song_array } = require("./melon");
// TODO: #11 멜론 top100 리스트에 랭크된 가수는 총 몇 팀인가요?
// Set와 속성 .size를 활용
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

// set으로 자동 중복 제거.version
// const artist_array = song_array
//     .map(({ artist }) => artist)

// const artist_set = new Set(artist_array);
// console.log(artist_set.size);

// reduce로 직접 제거
const artist_array2 = song_array
    .map(({ artist }) => artist)
    .reduce((acc, artist) => {
        acc.add(artist);
        return acc;
    }, new Set())
    .size;

console.log(artist_array2);



////////////////////////////////////////////////////////////
// const lanked_artist = [];

// const artists = song_array.map(song => song.artist);


// for (const artist of artists) {
//     if (lanked_artist.includes(artist)) {
//         // pass
//     } else {
//         lanked_artist.push(artist)
//     }
// }

// const count_artist = lanked_artist.length;
// console.log(count_artist);


