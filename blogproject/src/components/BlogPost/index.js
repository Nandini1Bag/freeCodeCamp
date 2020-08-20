import React, { useState, useEffect }  from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import ResponsivePlayer from '../ResponsivePlayer/ResponsivePlayer';
import SocialMediaShareButtons from '../SocialMediaShare/index';

const BlogPost=(props)=> {

    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        postedOn: "" ,
        author: "" ,
        blogImage: "" ,
        blogText: "",
        Reviewdata:""
    });
    const [slug, setSlug] = useState('');
    
    //hooks
    useEffect(() => {
        const slug = props.match.params.slug;
        const post = blogPost.data.find(post => post.slug == slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    let postreviewdata=[];
    if(post.blogImage == "") return null;

    if(post.Reviewdata !== "") {

        for (let i in post.Reviewdata) {
            let num=Number(i)+1;
            postreviewdata.push(
                <div>                  
                    <h2>{num +". "+ post.Reviewdata[i].name}</h2>
                    <h3>{'Genre:- '+ post.Reviewdata[i].genre}</h3>
                    <h3>{'IMDB-Rating:- '+ post.Reviewdata[i].IMDBRating}</h3>
                    <div style={{marginLeft:'95px'}}>
                    <ResponsivePlayer  url={post.Reviewdata[i].TrailerLink} width ={'560px'} height={'360px'}> </ResponsivePlayer>
                    </div> 
                    <h3>{'Synopsis:- '+post.Reviewdata[i].Synopsis}</h3>
                </div>
            ); 
          }
    };

    return (
        <div className="blogPostContainer">
        <Card>
            <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
        </div>
        <div className="postImageContainer">
        <img src={require('../../blogPostImages/' + post.blogImage)} alt="Post Image" />         
        </div>
        <div className="postContent">
        <h3>{post.blogTitle}</h3>
        <p>{post.blogText}</p>
        <p>{postreviewdata}</p>
        <br/>
        <div className="SocialMediaShare">
        <span>Share this:</span><SocialMediaShareButtons/>
        </div>
        </div>
        </Card> 
        </div>  
    )
}

export default BlogPost;
