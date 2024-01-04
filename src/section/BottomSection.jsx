import { TiSocialLinkedin } from "react-icons/ti";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const websites = {
  linkedin: 'https://linkedin.com/isaiah-vickers',
  website: 'http://isaiahvickers.online',
  github: 'https://github.com/izzymadethat'

}


const BottomSection = () => {
  return (
    <div className='bottom-section'>
      <p>Created by Isaiah Vickers.</p>
      <div className="bottom-section__icons">
        <a href={websites.linkedin}><TiSocialLinkedin className="linkedin" /></a>
        <a href={websites.website}><FaGlobeAmericas className="web-icon" /></a>
        <a href={websites.github}><FaGithub className="github" /></a>
      </div>
    </div>
  )
}

export default BottomSection