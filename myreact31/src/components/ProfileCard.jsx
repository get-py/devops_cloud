import './ProfileCard.css'
// import image from "../img/member1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



function ProfileCard({
    member,
	profile_image_url,
	name,
	role,
	facebook_url,
	email,
    changeUserPage,
    children,
    mbti,
    instagram_url,
}) {
	return (
        
		<div className={member}> 

            <section>
                <nav className="menu">
                    <a href="#"><FontAwesomeIcon icon={faBars} /></a>
                    <a href="#"><FontAwesomeIcon icon={faStickyNote} /></a>
                </nav>
                <article className="profile">
                    <img src={profile_image_url} alt="프로필 이미지" />

                    <h1>{name}</h1>
                    <h2>{role}</h2>
                    <h2>{mbti}</h2>
                    

                    <a href="#" className="btnView">VIEW MORE</a>
                </article>
                <ul className="contact">
                    <li>
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>
                            <a href={instagram_url}>Visit My Instagram</a>
                        </span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStickyNote} />
                        <span>{email}</span>
                    </li>
                </ul>

               
                <nav className="others">
                    {children}
                </nav>
            </section>
		</div>
	)
}

export default ProfileCard;