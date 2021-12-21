const { melon_data: song_array } = require("./melon");
// TODO: #10 방탄소년단의 좋아요의 총 합은?
// Array의 filter와 reduce를 활용해주세요.


function isBTS(song) {
    return song.artist === "방탄소년단";
}

const BTS_song_array = song_array.filter(isBTS);
const BTS_likes_list = BTS_song_array.map(song => song.like);

const reducer = (previousValue, currentValue) => previousValue + currentValue;


var BTS_song_likes = 0;

console.log(BTS_likes_list.reduce(reducer, BTS_song_likes));
