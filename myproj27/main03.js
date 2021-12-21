const { melon_data: song_array } = require("./melon");
// TODO: #3 좋아요수 top10을 출력
// Array의 sort 활용
// 출력포맷 : `[좋아요수] 곡명 가수명`



song_array.sort(function (a, b) {
    if (a.like > b.like) {
        return -1;
    }
    if (a.like < b.like) {
        return 1;
    }
    return 0;
});


for (const song of song_array.slice(0, 10)) {
    console.log([song.like], song.title);
}