const { melon_data: song_array } = require("./melon");
// TODO: #12 2곡 이상 랭크된 가수는 총 몇 팀인가요?
// reduce, Set

// solve1

const artist_count_object = song_array
    .reduce((acc, { artist }) => {
        // if (! acc[artist]) acc[artist] = 0;
        // acc[artist] = acc[artist] || 0;
        acc[artist] ||= 0;
        acc[artist] += 1;
        return acc
    }, {});

const total = Object.values(artist_count_object)  // py d.value()
    .filter(count => count >= 2)
    .length;

console.log(total);





// 내가 한 풀이
// const lanked_artist = [];
// const over_2_song_artist = [];

// const artists = song_array.map(song => song.artist);


// for (const artist of artists) {
//     if (lanked_artist.includes(artist)) {
//         over_2_song_artist.push(artist)
//     } else {
//         lanked_artist.push(artist)
//     }
// }

// let result = over_2_song_artist.sort().reduce((accumulator, current) => {
//     const length = accumulator.length
//     if (length === 0 || accumulator[length - 1] !== current) {
//         accumulator.push(current);
//     }
//     return accumulator;
// }, []);
// console.log(result.length);