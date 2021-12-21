const { melon_data: song_array } = require("./melon");
// TODO: #4 좋아요수가 200,000 이상인 곡명만 출력하기
// Array의 filter 활용
// 출력포맷 : `[좋아요수] 곡명 가수명`


function over_200000(song) {
    return song.like >= "200000";
}

const like_over_200000_song_array = song_array.filter(over_200000);

for (const song of like_over_200000_song_array) {
    console.log([song.like], song.title, song.artist);
}