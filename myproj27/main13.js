const { melon_data: song_array } = require("./melon");
// TODO: #13 방탄소년단의 곡 중에 좋아요 수가 가장 큰 곡명은?
// Array의 filter와 reduce를 활용해주세요.

function isBTS(song) {
    return song.artist === "방탄소년단";
}

const BTS_song_array = song_array.filter(isBTS);
const BTS_song_like = BTS_song_array.map(song => song.like);

const max_like = BTS_song_like.reduce((previous, current) => {
    return previous > current ? previous : current;
});

for (const song of BTS_song_array) {
    if (song.like == max_like) {
        console.log(song.title, song.like);
    }
}




