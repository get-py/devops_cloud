const { melon_data: song_array } = require("./melon");

// TODO: #1 like 오름차순으로 정렬
// 출력포맷 : `[좋아요수] 곡명`

for (const song of song_array) {
    console.log([song.like], song.title);
}