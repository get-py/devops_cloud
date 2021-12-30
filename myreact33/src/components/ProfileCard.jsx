import './ProfileCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function ProfileCard({ user, member }) {
  return (
    <div className={member}>
      <section>
        <nav className="menu">
          <a href="#">
            <FontAwesomeIcon icon={faBars} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faStickyNote} />
          </a>
        </nav>
        <article className="profile">
          <img src={user.profile_image_url} alt="" />

          <h1>{user.name}</h1>
          <h2>{user.role}</h2>
          <h2>{user.mbti}</h2>

          <a href="#" className="btnView">
            VIEW MORE
          </a>
        </article>
        <ul className="contact">
          <li>
            <FontAwesomeIcon icon={faFacebook} />
            <span>
              <a href={user.instagram_url}>Visit My Instagram</a>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default ProfileCard;
