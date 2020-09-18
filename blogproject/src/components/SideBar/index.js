import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import SocialFollow from "../SocialFollow";
import axios from '../../axios-connect';
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(false);    
    
    useEffect(() => {
     
        const fetchData = async () => {
            setIsError(false);
            try {
                const result = await axios(
                    'https://blogsite-73583.firebaseio.com/data.json',
                );
                const posts = result.data;
                setPosts(posts);
              } catch (error) {
                setIsError(true);
              }    
          };
          fetchData();

    }, []);


   const  SideAboutMe = props => {
         if (!props.Aboutme) {
           return null;
              }

            return (
                <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Me</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../../blogPostImages/Aboutme.JPG')} alt="" />
                </div>
                <div className="cardBody">
                   <NavLink to="/about-us" >
                   <p className="personalBio">Hi, it's Nandini. I am a software engineer from India 
                   but working remotely most of the time.....:)</p>
                   </NavLink>              
                </div>
            </Card>
            );
        }


  return(
      <div className="sidebarContainer" style={{width: props.width}}>
           <SideAboutMe Aboutme={props.Aboutme}/>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                <span>Follow Us on Social Media</span>
                </div>
                <div className="socialFollow">
                <SocialFollow size='2x' padding='5px'/>
                </div>
            </Card>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
            <div className="cardHeader">
            <span>Get notified about new articles!!</span>
                <form action="" method="post" novalidate="">
                    <div className="emailCard">
                    <p>
                        <label>Email address: </label>
                        <input type="email" name="EMAIL" placeholder="Your email" required/>
                    </p>
                    <p><button className="Subscribe" type="submit">Subscribe</button></p>
                   </div>
                 </form>
            </div>
            </Card>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                {isError && <div>Something went wrong ...</div>}
                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar