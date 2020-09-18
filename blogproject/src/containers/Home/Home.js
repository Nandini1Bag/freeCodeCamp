import React , { useState, useEffect } from 'react';
import './Home.css';
import Card from '../../components/UI/Card';
import RecentPosts from './RecentPosts/RecentPosts';

import axios from '../../axios-connect';
import Layout from '../../components/Layout';

const SideImage = props => {
    return (
        <div style={{ height: `${props.height}px`  }}>
            <img src={props.src} alt="" />
        </div>
    );
}

const ImageGallary = props => (
        <div className="gallaryPost" style={props.gallaryStyle}>
                <section style={{ width: props.largeWidth }}>
                    <div className="mainImageWrapper">
                        <img src={require('../../blogPostImages/' + props.imagesArray[1])} alt="" />
                    </div>
                </section>
                <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
                    {
                        props.imagesArray.map(image => 
                            <SideImage 
                                height={props.sideImageHeight}
                                src={require('../../blogPostImages/' + image)}
                                alt="" />
                        )
                    }
                </section>
        </div>
);

const Home  = props => {

    const [postdata, setPostdata] = useState([]);
    const [isError, setIsError] = useState(false);


    useEffect(() => {
     
        const fetchData = async () => {
            setIsError(false);
            try {
                const result = await axios(
                    'https://blogsite-73583.firebaseio.com/data.json',
                );
                const postsdata = result.data;
                setPostdata(postsdata);
              } catch (error) {
                setIsError(true);
              }    
          };
          fetchData();

    }, []);

    const gallaryHeight = 450;
    const gallaryStyle = {
        height: gallaryHeight+'px',
        overflow: 'hidden'
    }
    const sideImageHeight = gallaryHeight / 3;
  
    const imgAr = postdata.map(post => post.blogImage)

  let ImageGallaryComp='';
  if (imgAr.length>0) {
    ImageGallaryComp =  <ImageGallary 
    largeWidth="70%"
    smallWidth="30%"
    sideImageHeight={sideImageHeight}
    gallaryStyle={gallaryStyle}
    imagesArray={imgAr}/>;
  }

    return (
        <div>
            <Card>
                {ImageGallaryComp}
            </Card>
            {isError && <div>Something went wrong ...</div>}
                <Layout Aboutme={true}>
                    <RecentPosts style={{width: '70%'}}/>
                </Layout>
        </div>
    );
}

export default Home;