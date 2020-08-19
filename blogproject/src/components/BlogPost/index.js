import React, { useState, useEffect }  from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

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
            postreviewdata.push(
                <div>
                    <h2>{post.Reviewdata[i].name}</h2>
                    <h2>{post.Reviewdata[i].genre}</h2>
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
        </div>
        </Card> 
        </div>  
    )
}

export default BlogPost;
