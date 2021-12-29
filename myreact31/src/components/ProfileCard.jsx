import './ProfileCard.css'
// import image from "../img/member1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'



function ProfileCard({
    member,
	profileImage,
	name,
	role,
	facebook_url,
	email,
    changeUserPage,
    children,
}) {
	return (
        
		<div className={member}> 

            <section>
                <nav className="menu">
                    <a href="#"><FontAwesomeIcon icon={faBars} /></a>
                    <a href="#"><FontAwesomeIcon icon={faStickyNote} /></a>
                </nav>
                <article className="profile">
                    <img src={profileImage} alt="프로필 이미지" />

                    <h1>{name}</h1>
                    <h2>{role}</h2>

                    <a href="#" className="btnView">VIEW MORE</a>
                </article>
                <ul className="contact">
                    <li>
                        <FontAwesomeIcon icon={faFacebook} />
                        <span>
                            <a href={facebook_url}>Visit My Facebook Page</a>
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