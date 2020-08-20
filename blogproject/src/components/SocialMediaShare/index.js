import React from "react";
import {FacebookShareButton, FacebookIcon,WhatsappShareButton,WhatsappIcon,TwitterShareButton,TwitterIcon} from "react-share";
import './style.css';

 const  SocialMediaShareButtons=(props) =>{
       return (
           <div className="socialMediaButtons">
             <FacebookShareButton 
                url={"http://www.camperstribe.com"}                
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#camperstribe"
                className="socialMediaButton">
                 <FacebookIcon round size={32} />
              </FacebookShareButton>
               <WhatsappShareButton
               url={"http://www.camperstribe.com"}
               title={"CampersTribe - World is yours to explore"}
               separator=":: "
               className="socialMediaButton">
               <WhatsappIcon round size={32} />
             </WhatsappShareButton>
             <TwitterShareButton
               url={"http://www.camperstribe.com"}
               title={"CampersTribe - World is yours to explore"}
               hashtag="#camperstribe"
               className="socialMediaButton">
               <TwitterIcon round size={32} />
               </TwitterShareButton>
             </div>
       );
}

       
export default SocialMediaShareButtons;