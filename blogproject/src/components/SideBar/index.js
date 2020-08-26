import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import SocialFollow from "../SocialFollow";

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);


   const  SideAboutMe = props => {
         if (!props.Aboutme) {
           return null;
              }

            return (
                <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../../blogPostImages/Aboutme.JPG')} alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Nandini Bag I am a software developer specialization in Front end developement....:)</p>
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
                    <span>Recent Posts</span>
                </div>

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