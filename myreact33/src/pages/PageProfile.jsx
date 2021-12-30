import Axios from 'axios';
import { useEffect, useState } from 'react';

function PageProfile() {
  //   const [profile, setProfile] = useState();
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [profileList, setProfileList] = useState([]);

  const handleClick1 = () => {
    setProfileList([]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Enter 키를 입력했습니다.
      console.log('ENTER');
      const value = e.target.value;
      setQuery(value);
    }
  };

  const handleRefresh = () => {
    setError(null);
    const url =
      'https://classdevopscloud.blob.core.windows.net/data/profile-list.json';
    Axios.get(url)
      .then((response) => {
        const { data } = response;
        setProfileList(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <div>
      <h2>프로필 검색</h2>
      검색어 : {query}
      <input
        placeholder="검색어를 입력해주세요"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <h2>PageProfile</h2>
      <button onClick={handleClick1}>클리어</button>
      <button onClick={handleRefresh}>새로고침</button>
      {profileList.length === 0 && <h4>등록된 프로필이 없습니다</h4>}
      {error && <h4>잠시 후에 다시 시도해주십시오</h4>}
      {profileList
        .filter((user) => {
          return (
            user.name.includes(query) ||
            user.role.includes(query) ||
            user.mbti.includes(query)
          );
        })
        .map((user) => {
          return (
            <>
              <h3>{user.name}</h3>
              <img src={user.profile_image_url} alt="" />
              <ul>
                <li>{user.role}</li>
                <li>{user.mbti}</li>
                <li>
                  <a href={user.instagram_url}>instagram</a>
                </li>
              </ul>
            </>
          );
        })}
    </div>
  );
}

export default PageProfile;
