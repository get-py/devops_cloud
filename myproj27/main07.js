const { melon_data: song_array } = require("./melon");
// TODO: #7 방탄소년단의 곡명 문자열로 구성된 배열을 구성해주세요.
// Array의 filter와 map 활용
// 출력포맷 : [곡명1, 곡명2, 곡명3]

function isBTS(song) {
    return song.artist === "방탄소년단";
}

const BTS_song_array = song_array.filter(isBTS);


BTS_song = [];
for (const song of BTS_song_array) {
    BTS_song.push(song.title);
}
console.log(BTS_song);