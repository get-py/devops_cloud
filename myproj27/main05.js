const { melon_data: song_array } = require("./melon");
// TODO: #5 좋아요수가 200,000이상인 곡명에 대해서, 곡명 오름차순 정렬
// Array의 filter와 sort를 연계
// 출력포맷 : `[좋아요수] 곡명 가수명`

song_array.sort(function (a, b) {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
        return -1;
    }
    return 0;
});


function over_200000(song) {
    return song.like >= "200000";
}

const like_over_200000_song_array = song_array.filter(over_200000);

for (const song of like_over_200000_song_array) {
    console.log([song.like], song.title, song.artist);
}