const { melon_data: song_array } = require("./melon");
// TODO: #9 좋아요수가 200,000이상인 곡들의 곡명 리스트를 만들어보세요.
// Array의 filter와 map 활용

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

const over_200000_song_list = []

for (const song of like_over_200000_song_array) {
    over_200000_song_list.push(song.title);
}

console.log(over_200000_song_list);