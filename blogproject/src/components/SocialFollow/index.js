import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './style.css';


const  SocialFollow=(props)=> {
  return (
    <div className="social-container" style={{ padding:props.padding }} >
      <a href="https://www.youtube.com/" >
        <FontAwesomeIcon icon={faYoutube}  style={{ color: 'red' }}  size={props.size} />
      </a>
      <a href="https://www.facebook.com/" >
        <FontAwesomeIcon icon={faFacebook}  style={{ color: '#4968ad' }}  size={props.size}  />
      </a>
      <a href="https://www.twitter.com/">
        <FontAwesomeIcon icon={faTwitter}  style={{ color: '#49a1eb' }} size={props.size}  />
      </a>
      <a href="https://www.instagram.com/">
        <FontAwesomeIcon icon={faInstagram}  style={{ color: 'black' }} size={props.size} />
      </a>
    </div>
  );
}

export default SocialFollow;