import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import './ContactUs.css';
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm';

const ContactUs=()=> {
    return (
      <Layout Aboutme={true}>
        <div className="ContactusContainer">
        <Card style={{marginBottom: '20px'}}>
        <div className="PageHeader">
        <h2 className="Title">Contact us</h2>
         <div className="ContactusContent">
           <p>*I absolutely love hearing from my readers. 
             You guys are the reason why I write this blog! That said, 
             I get numerous emails per day that take hours to answer.  
             Please don’t hesitate to reach out, but if your question is travel tip or planning-specific,
             please look at my destinations page and/or use the search bar at the top of the homepage.
             You will probably find that your question is answered somewhere on the site. 
             If not, please leave a comment on the blog post with your specific question – I will reply.</p>
          <ContactUsForm></ContactUsForm>
         </div>
        </div>
        </Card>
        </div>
        </Layout>
    )
}

export default ContactUs;
