import React from 'react';
import styles from "@/styles/home.module.css"
import  Button  from '@/components/homeButton'
import ContactSection from '@/components/contactSectionHome';
import Component from '@/components/vineet';
import Ppp from '@/components/ppp';
import Link from 'next/link';


function Home() {
  return (
    <div>
    <div className={styles.heroSection}>
    <div className={styles.left}>
<h1>Branding, Marketing Strategy,<br></br> and Web Design Agency</h1>
<div className={styles.buttons}>
<Link href="/contact">
<Button></Button>
</Link>

<button class={styles.primary_button}>
  About us
</button>
</div>
    </div>
    <div className={styles.right}>
      <img
        src="https://149808042.v2.pressablecdn.com/wp-content/uploads/2023/09/Brand-Build-Grow-In-One.png"
        alt=""
      />
      </div>
    </div>
    <hr />
    <Ppp></Ppp>
    <ContactSection></ContactSection>
    <Component></Component>
   
  </div>

  )
}

export default Home;
