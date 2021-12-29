import PageLotto from "./components/PageLotto";
import ProfileCard from "./components/ProfileCard";
import TopNav from "./components/TopNav";
import profileList from "./data/profile_data.json";
import { useEffect, useState } from "react";

function App() {
  const [userNum, setUserNum] = useState(profileList[0].name);

  return (
    <>
      <useEffect />

      <hr />
      {profileList.map((user, index) => {
        if (userNum === user.name) {
          return (
            <div className={`member${index % 4}`}>
              <ProfileCard
                profileImage={user.profileImage}
                name={user.name}
                facebook_url={user.facebook_url}
                email={user.email}
                changeUserPage={setUserNum}
                member={user.user}
              >
                <nav>
                  {profileList.map((user) => {
                    return (
                      <a
                        onClick={() => setUserNum(user.name)}
                        className={user.name === user ? "on" : ""}
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
