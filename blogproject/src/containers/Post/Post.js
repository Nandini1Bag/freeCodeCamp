import React from 'react';
import './Post.css';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';


const Post = (props) => {

    console.log(props);

  return(
        <Layout>
          <BlogPost {...props} />
        </Layout>
   )

 }

export default Post;