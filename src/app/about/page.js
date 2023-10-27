import React, { useState } from 'react';
import Image from 'next/image'; // Import Image from next/image
import styles from '@/styles/contact.module.css';
import Cardclient from '@/components/contactCard';

<<<<<<< HEAD
import React from "react";
import styles from "@/styles/about.module.css"
import Cardclient from "@/components/aboutCard";
import Wepage from "@/components/weprovide";
=======
const Page = () => {
  // Use useState within the functional component
  const [state, setState] = useState(initialValue);
>>>>>>> a48710b6b19cd75a3cdf5a77b35253fcf92769ed

  return (
    <div className={styles.maincard}>
      <div className={styles.image}>
        <Image
          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
          alt="about"
          width={500} // Adjust width and height as needed
          height={300}
        />
      </div>
      <div className={styles.heading}>
        <h1>ABOUT US</h1>
      </div>
      <hr />

      <div className={styles.whowe}>
        <h1>WHO WE ARE</h1>
        <p>Empire technology Web Services is a company committed to providing world-class services that accelerate the growth and success of their clients. Here at Empires tech we are committed to providing effective solutions with our diverse range of services including Software Development, Payment Gateway Solutions, Web Design And Development, Digital Marketing, Search Engine Optimization, and Android Apps. The company creates an environment for its employees, a team of experts across various fields who utilize their expertise and vast domain knowledge to accelerate the growth and success of their clients, and who have enough space to work independently.</p>
      </div>
      <hr />

      <div className={styles.cards}>
        <Cardclient name="Satyam Samele" position="CEO" />
        <Cardclient name="Amit Singh" position="President" />
        <Cardclient name="Sachin Chaturvedi" position="CFO" />
      </div>
    </div>
<<<<<<< HEAD
    <div className={styles.heading}>
    <h1>ABOUT US</h1>
    </div>
    <hr />


    <div className={styles.whowe}>
      <h1>WHO WE ARE</h1>
      <p>Empire technology Web Services is a company committed to providing world-class services that accelerate the growth and success of their clients. Here at Empires tech we are committed to providing effective solutions with our diverse range of services including Software Development, Payment Gateway Solutions, Web Design And Development, Digital Marketing, Search Engine Optimization,  and Android Apps. The company creates an environment for its employees, a team of experts across various fields who utilize their expertise and vast domain knowledge to accelerate the growth and success of their clients, and who have enough space to work independently.</p>
    </div>
  
    <Wepage></Wepage>


    <div className={styles.cards}>
    <Cardclient name="Satyam Samele" position="CEO"></Cardclient>
    <Cardclient name="Amit Singh" position="President"></Cardclient>
    <Cardclient name="Sachin Chaturvedi" position="CFO"></Cardclient>
   
    </div>
   
 
</div>

   
=======
>>>>>>> a48710b6b19cd75a3cdf5a77b35253fcf92769ed
  );
};

export default Page;
