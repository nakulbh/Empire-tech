"use client";
import React, { useEffect,useState } from "react";
import styles from "@/styles/contact.module.css";
// import axios from "axios";
import Contactcard from "@/components/contactcard";


  const page = () => {
    const iframeStyle = {
        borderRadius: "10px", // Adjust the value as needed
      };
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");  
    const [message,setMessage]=useState("");  
    const [subject,setSubject]=useState(""); 
    const [Sucess,setSucess]=useState("");
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
  
    console.log("User name",username);
    console.log("Email",email);
    console.log("message",message);
    console.log("Subject" ,subject);
   
  

    try {
      console.log("trying");
      const res = await fetch(`/api/users/contact/`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          username,
          email,
          message,
          subject
        })
      });
  
      const  msg  = await res.json();
      // Do something with msg
      console.log(msg);
    } catch (error) {
      console.log("trying");
      // Handle any errors here
      console.error(error+"ERROR");
    }
    setUsername("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSucess("Message sent successfully");
  
  };
  return (
    <>
      <div className={styles.image}>
        <img
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
          alt="about"
        />
      </div>

      {/* second botton */}
      <div className={styles.Heading}>
        <h1>Contact us</h1>
      </div>
      <Contactcard />

      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className="iframe-container">
            {" "}
            {/* Apply the CSS class to a containing div */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3367954877317!2d77.49086347539715!3d28.469402175754233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea74cbe81503%3A0x3d100ac5d4e327a!2sKCC%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1697713991529!5m2!1sen!2sin"
              height={400}
              // width={600}
              allowFullScreen=""
              loading="lazy"
              style={iframeStyle}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <hr />
        <div className={styles.right}>
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            {" "}
        
            <div>
              <label htmlFor='fullname' className={styles.label}>Username</label>{" "}
              {/* Apply the "label" class */}
              <input
                type="text"
                name="username"
                placeholder='Enter your name'
                required="true"
                className={styles.input_field}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value );
                }}
              />{" "}
          
            </div>
            <div>
              <label className={styles.label}>Email</label>{" "}
             
              <input
              onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="email"
                required="true"
                placeholder="email"
                className={styles.input_field}
              />{" "}
           
            </div>
            <div>
              <label className={styles.label}>Subject</label>{" "}
              <input
              onChange={(e)=>setSubject(e.target.value)}
                value={subject}
                type="text"
                required="true"
                placeholder="Subject"
                className={styles.input_field}
              />{" "}
           
            </div>
            <div>
              <label htmlFor='message' className={styles.label}>Message:</label>
              <textarea
                name="message"
                className={styles.textarea}
                onChange={(e)=>setMessage(e.target.value)}
                value={message}
                required="true"
              ></textarea>{" "}
            
            </div>
            <div>
              <button
                type="submit"
                className={styles.submit_button}
              >
                Submit
              </button>{" "}
            
            </div>
            <div className={styles.sucess}>{Sucess}</div>
          </form>
      

        </div>
      </div>
      

      <hr />
    </>
  
  )
}

export default page
