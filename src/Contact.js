  import React, { useEffect } from "react";
  import "./Contact.css";
  import Footer from "./Footer";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faEnvelope, faTimes, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';
  import { faYoutube, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importing the social media icons



  function Contact() {
    useEffect(() => {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbynHDkLmJmVvA8JwXV6q6A8xAru1jEcxkONsOadVq7zrj97Wt4M8CMs_dtG8KJdSNt1/exec';
      const form = document.forms['contactform'];
      const loadingSpinner = document.getElementById("loading-spinner");

      const handleSubmit = (e) => {
        e.preventDefault();
        
        loadingSpinner.classList.remove("hidden");
        
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => response.json())
          .then(result => {
            loadingSpinner.classList.add("hidden");
            document.getElementById("success-message").classList.remove("hidden");
            setTimeout(() => {
              document.getElementById("success-message").classList.add("hidden");
            }, 3000); 
          })
          .catch(error => {
            loadingSpinner.classList.add("hidden");
            document.getElementById("error-message").classList.remove("hidden");
            setTimeout(() => {
              document.getElementById("error-message").classList.add("hidden");
            }, 3000); 
          });
            
        form.reset();
      };

      form.addEventListener('submit', handleSubmit);

      return () => {
        form.removeEventListener('submit', handleSubmit);
      };
    }, []);

    return (
    <div>
      
      <div className="contact">
      <div id="error-message" className="message hidden  error-message" ><FontAwesomeIcon icon={faTimes} />  Pleace fix the error to submit the details. Thank you!.</div>
          <div id="success-message" className="message hidden success-message"> <FontAwesomeIcon icon={faCheck} /> Your message has been sent. Thank you!</div>
        <div className="form-container">
          <form className="contact-form" name="contactform" method="post"> 
            <h1 style={{color: '#fff'}}>Contact Us</h1>
            <input type="text" name="name" placeholder="NAME" required />
            <input type="email" name="email" placeholder="EMAIL ID" required/>
            <input type="mobille" name="mobile" placeholder="MOBILE NUMBER" required/>
            <input type="text" name="message" placeholder="How Can We Help You" required/>
            <button type="submit">Submit</button>

            <div className="icons">
           <a href="tel:+08951671986"><FontAwesomeIcon icon={faPhone} /></a>
           <a href="mailto:ad91482948@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
           <a href="g"><FontAwesomeIcon icon={faFacebook} /></a>
           <a href="tel:+08951671986"><FontAwesomeIcon icon={faYoutube} /></a>
           <a href="https://api.whatsapp.com/send?phone=8951671986"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
            
          </form>
          <div id="loading-spinner" className="hidden">
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          </div>
        </div>
      </div>
      

  <Footer />







    </div>
    );
  }

  export default Contact;
