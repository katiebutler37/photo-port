import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  //set initial state to empty strings to clear the form data
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  //sync the internal state of the component formState with the user input from the DOM
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    //use the spread operator, ...formState, so we can retain the other key-value pairs in this object
    //Without the spread operator, the formState object would be overwritten to only contain the name: value key pair
    //the name property of target in the preceding expression actually refers to the name attribute of the form element
    if (!errorMessage) {
      //conditional statement only allows the state to update with the user input if there is no error message
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
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
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
