import { Input } from 'antd';
import { useState } from 'react';
import Axios from 'axios';
import jsonAdapter from 'axios-jsonp';
import { List, Avatar, notification, Typography } from 'antd';


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
            const { data: {SONGCONTENTS: serchedSongList=[]}, 
            } = response;
            

            console.group("멜론검색결과");
            console.log(serchedSongList);
            console.groupEnd();

            setSongList(serchedSongList);

            const type = 'info'
            notification[type]({
                message: "멜론 검색",
                description: `${serchedSongList.length}개의 노래 검색결과가 있습니다`,
            })

            
        })
        .catch((error) => {
            console.group('멜론 검색 에러');
            console.error(error);
            console.groupEnd();

            notification.error({
                message: "멜론 검색 error",
                description: JSON.stringify(error),
            })
        });
    }    

    const data = [{title: ''}];

    return <div style={{width:300, margin: '0 auto'}}>
                <h2>멜론 검색</h2>
                검색어 : {query}
            <Input placeholder='검색어를 입력해주세요.'
                onChange={handleChange}
                onPressEnter={handlePressEnter}
            />
            {songList.map((song) => {
                return (
                        <List key={song.SONGID}
                          itemLayout="horizontal"
                          dataSource={data}
                          renderItem={item => (
                            <List.Item>
                              <List.Item.Meta
                                avatar={<Avatar src={song.ALBUMIMG} />}
                                // title={song.SONGNAME}
                                description={song.ARTISTNAME}
                              />
                            <Typography.Text 
                                onClick={() => 
                                    console.log(`clicked ${JSON.stringify(song)}`)}>
                                        <a href={`https://www.melon.com/song/detail.htm?songId=${song.SONGID}`}>
                                            {song.SONGNAME}
                                        </a>            
                            </Typography.Text>
                            </List.Item>
                          )}
                        />
                )        
            })}
            </div>;
}

export default MelonSearch;