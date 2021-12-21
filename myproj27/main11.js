const { melon_data: song_array } = require("./melon");
// TODO: #11 멜론 top100 리스트에 랭크된 가수는 총 몇 팀인가요?
// Set와 속성 .size를 활용
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

const lanked_artist = [];

const artists = song_array.map(song => song.artist);


for (const artist of artists) {
    if (lanked_artist.includes(artist)) {
        // pass
    } else {
        lanked_artist.push(artist)
    }
}

const count_artist = lanked_artist.length;
console.log(count_artist);


