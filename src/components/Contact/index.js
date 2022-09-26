import React, { useState } from 'react';

function ContactForm() {
    //set initial state to empty strings to clear the form data
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    //sync the internal state of the component formState with the user input from the DOM
    function handleChange(e) {
        //use the spread operator, ...formState, so we can retain the other key-value pairs in this object
        //Without the spread operator, the formState object would be overwritten to only contain the name: value key pair
        //the name property of target in the preceding expression actually refers to the name attribute of the form element
        setFormState({...formState, [e.target.name]: e.target.value })
      };
      //completed for the purposes of our front end app
      //to complete with a backend youd need to send the captured formState data to a database with a POST req
      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }  
  // JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
