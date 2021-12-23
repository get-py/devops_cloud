import { Input } from 'antd';
import { useState } from 'react';
import Axios from 'axios';
import jsonAdapter from 'axios-jsonp';


function MelonSearch() {
    const [query, setQuery] = useState("");
    const [songList, setSongList] = useState([]);

    const handleChange = (e) => {
        const { target: {value} } = e;
        console.group("handleChange");
        console.log(value);
        console.groupEnd();
        setQuery(value);
    };
    const handlePressEnter = () => {        
        console.group("handlePressEnter");
        console.log(`검색어 ${query}로 검색합니다.`);
        console.groupEnd();
        const url = 'https://www.melon.com/search/keyword/index.json';


        Axios({
            url: url,
            adapter: jsonAdapter,
            callbackParamName: 'jscallback', // optional, 'callback' by default
            params: {
                query: query,
            }
        }).then((response) => {
            const { data: {SONGCONTENTS: serchedSongList }, 
            } = response;
            

            console.group("멜론검색결과");
            console.log(serchedSongList);
            console.groupEnd();

            setSongList(serchedSongList || []);
        })
        .catch((error) => {
            console.group('멜론 검색 에러');
            console.error(error);
            console.groupEnd();
        });
    }    

    return <div style={{width:300, margin: '0 auto'}}>
                <h2>멜론 검색</h2>
                검색어 : {query}
            <Input placeholder='검색어를 입력해주세요.'
                onChange={handleChange}
                onPressEnter={handlePressEnter}
            />
            {songList.map((song) => {
                return (
                    <div key={song.SONGID}>
                        <img src={song.ALBUMIMG} />
                        {song.SONGNAME} by {song.ARTISTNAME}
                    </div>
                );
            })}
            </div>;
}

export default MelonSearch;