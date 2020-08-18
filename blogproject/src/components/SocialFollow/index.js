import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './style.css';


const  SocialFollow=()=> {
  return (
    <div className="social-container">
      <a href="https://www.youtube.com/" >
        <FontAwesomeIcon icon={faYoutube}  style={{ color: 'red' }}  size="2x" />
      </a>
      <a href="https://www.facebook.com/" >
        <FontAwesomeIcon icon={faFacebook}  style={{ color: '#4968ad' }}  size="2x" />
      </a>
      <a href="https://www.twitter.com/">
        <FontAwesomeIcon icon={faTwitter}  style={{ color: '#49a1eb' }} size="2x" />
      </a>
      <a href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram}  style={{ color: 'black' }} size="2x" />
      </a>
    </div>
  );
}

export default SocialFollow;