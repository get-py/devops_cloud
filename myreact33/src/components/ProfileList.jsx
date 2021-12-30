import './ProfileList.css';
import ProfileCard from './ProfileCard';

function ProfileList({ profileList }) {
  return (
    <>
      {profileList.map((user) => {
        return <ProfileCard user={user} />;
      })}
    </>
  );
}

export default ProfileList;
