// TOOD: #2 방탄소년단의 곡명만 출력
// 출력포맷 : `가수명 곡명 좋아요수`

const { melon_data: song_array } = require("./melon");

function isBTS(song) {
    return song.artist === "방탄소년단";
}

const BTS_song_array = song_array.filter(isBTS);

for (const song of BTS_song_array) {
    console.log(song.artist, song.title, song.like);
}