import React from 'react';
import './ContactUsForm.css';

const ContactUsForm=()=> {

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }
    return (
        <div className='FormContent'>
       <form onSubmit={this.handleSubmit}>
         <div>
         <label>Your Name</label>
          <input type="text" name="contactp" placeholder="Your name.." maxlength="30"/>
         </div>
        <div>
        <label>Your Email <i>(required)</i></label>
        <input type="text" name="emailid" placeholder="Your Emailid.." maxlength="75" ></input>
        </div>
        <div>
            <label>Subject :</label>
            <input type="text" name="subject"  maxlength="50"/>
         </div>        
         <div>
            <label>Message <i>(required)</i></label>
            <textarea id="Message" name="message"  ></textarea>
         </div>
        <input type="submit" value="Send Message" />
      </form>
        </div>
         )
 }

export default ContactUsForm;