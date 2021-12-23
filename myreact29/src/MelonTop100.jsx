// 바뀌지 않는 데이터
// global 변수 = 전역변수

import { useState } from "react";
import initialSongList from'./data/melon_data.json';
import "./MelonTop100.css"
// 초기값을 정의



function MelonTop100() {
    const [songList, setSongList] = useState([]);

    const handleClick = () => {
      setSongList(initialSongList);
    };

    return (
        <div>
            <h2>멜론 Top 100</h2>
            <button onClick={handleClick}>로딩</button>
            <ul className="songList">
                {songList.map(song => {
                  return <li>{song.title} by {song.artist}</li>;
                })}

            </ul>
        </div>
    );
}

export default MelonTop100;