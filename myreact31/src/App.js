import { useEffect, useState } from "react";
import Axios from "axios";
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  const [profile, setProfile] = useState("진");
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://classdevopscloud.blob.core.windows.net/data/profile-list.json"
    )
      .then((response) => {
        // reponse는 axios 객체
        // response.data => 응답 내용
        setDataList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      {dataList.map((user, index) => {
        if (profile === user.name) {
          return (
            <div className={`member${index % 4}`}>
              <ProfileCard {...user} changeUserPage={setProfile}>
                <nav>
                  {dataList.map((user) => {
                    return (
                      <a
                        onClick={() => setProfile(user.name)}
                        className={user.name === profile ? "on" : ""}
                      ></a>
                    );
                  })}
                </nav>
              </ProfileCard>
            </div>
          );
        }
      })}
    </>
  );
}

export default App;
