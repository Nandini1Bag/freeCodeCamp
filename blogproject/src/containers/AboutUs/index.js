import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import './style.css';

const AboutUs=()=> {
    return (
        <div>
        <Layout>
         <Card style={{marginBottom: '20px'}}>
         <div className="AboutPage" style={{textAlign: 'center'}}>
                <h2>About Me</h2>
                <span>NOVEMBER 30, 2020 BY NANDINI DAS </span>
                <div className="AboutImage">
                        <img src={require('../../blogPostImages/Aboutme.JPG')} alt="" />
                 </div>
                 <div  className="mainpara">
                <p>Hi, it's Nandini. I am a software engineer from India but working remotely most of the time. 
                First of all, thank you for reading my blog.It's such a pleasure to have you here!</p>
                <p>
                A couple of words about my professional life: I graduated from university with a Master 
                of Science in Computer Science in 2014. At university I discovered how empowering it 
                can be to build applications and thus built several applications in different 
                programming languages, domains and platforms. Straight out of university, 
                I worked in a full-time position as software engineer on a large scale web 
                application using JavaScript and Java to help thousands of customers to 
                introduce a feedback culture in their companies. Those years gave me a lot of 
                practical experiences in the field and I tried to convey a part of the information on 
                my blog. During this journey, I found out about teaching as a fulfilling activity and therefore self-published 2 ebooks and launched a course platform. Fast forward in 2017, I decided to be self-employed, doing freelance and consultant work mostly related to web development. But I am always keen to learn something new, so I try to push myself every day. I am open for any opportunities in this field or software engineering, so find out how to work with me.
                </p>
                </div>
                  

            </div>
            </Card>
            </Layout>
        </div>
    )
}

export default AboutUs
