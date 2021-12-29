const { melon_data: song_array } = require("./melon");
// TODO: #3 좋아요수 top10을 출력
// Array의 sort 활용
// 출력포맷 : `[좋아요수] 곡명 가수명`


// array의 sort는 자신의 순서도 변경하고 자신을 반환
// 파이썬의 List sort 는 자신의 순서만 변경하고 리턴값 없음

song_array.sort(function (a, b) {
    if (a.like > b.like) {
        return -1;
    }
    if (a.like < b.like) {
        return 1;
    }
    return 0;
});



for (const [index, song] of song_array.slice(0, 10).entries()) {
    console.log(`${index + 1} [${song.like}] ${song.title} by ${song.artist}`);
}
