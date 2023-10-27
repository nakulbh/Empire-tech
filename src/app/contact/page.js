"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import Contactcard from "@/components/Contactcard";

const Page = () => {
  // Captcha code
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);


  const handleCaptchaVerification = (response) => {
    if (response) {
      setIsCaptchaVerified(true);
    }
  };

  const iframeStyle = {
    borderRadius: "10px", // Adjust the value as needed
  };


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      // reCAPTCHA is not verified, prevent form submission
      setSuccess("fill the captcha");
   
     
    }

    try {
    
      console.log("trying");
      const res = await fetch(`/api/users/contact/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          message,
          subject,
        }),
      });

      const msg = await res.json();
      // Do something with msg
      console.log(msg);
    } catch (error) {
      console.error(error + " ERROR");
    }

    setUsername("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSuccess("Message sent successfully");
    setIsCaptchaVerified(false);
  };

  return (
    <>
      <div className={styles.image}>
        <img
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
          alt="about"
        />
      </div>

      <div className={styles.Heading}>
        <h1>Contact us</h1>
      </div>
      <Contactcard />

      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className="iframe-container">
            <iframe
            className={styles.iframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3367954877317!2d77.49086347539715!3d28.469402175754233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea74cbe81503%3A0x3d100ac5d4e327a!2sKCC%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1697713991529!5m2!1sen!2sin"
             
             
            
              loading="lazy"
              style={iframeStyle}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <hr />

        <div className={styles.right}>
          <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname" className={styles.label}>
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                required={true}
                className={styles.input_field}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <label className={styles.label}>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required={true}
                placeholder="email"
                className={styles.input_field}
              />
            </div>
            <div>
              <label className={styles.label}>Subject</label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                type="text"
                required={true}
                placeholder="Subject"
                className={styles.input_field}
              />
            </div>
            <div>
              <label htmlFor="message" className={styles.label}>
                Message:
              </label>
              <textarea
                name="message"
                className={styles.textarea}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required={true}
              ></textarea>
              <div className="flex items-center justify-center flex-col">
                <ReCAPTCHA
                  sitekey="6Lc27NAoAAAAADtvayMceBuxyjb8_oP3gJRrh7uq"
                  onChange={handleCaptchaVerification}
                />
                <button type="submit" className={styles.submit_button} disabled={!isCaptchaVerified}>
               Submit
                </button>
              </div>
            </div>
            <div className={styles.success}>{isCaptchaVerified?"success":"fill the captcha"}</div>
          </form>
        </div>
       
      </div>
   
    </>
  );
};

export default Page;
