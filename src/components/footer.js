import React from 'react';
import styles from '@/styles/footer.module.css';
import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
  return (
    
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_content}>
          <div className={styles.footer_navigation}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact</Link></li> {/* Change "to" to "href" here */}
            </ul>
          </div>
          <div className={styles.footer_logo}>
         <h1 className='bg-black-900'>Empire <span className='bg-orange-500 text-black rounded'>Technology</span> </h1>
          </div>
          <div className={styles.footer_social}>
            <ul>
              <li><a href="https://www.facebook.com/imdb/" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a></li>
              <li><a href="https://twitter.com/IMDb" target="_blank" rel="noopener noreferrer"> <TwitterIcon/></a></li>
              <li><a href="https://www.instagram.com/imdb/" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a></li>
              <li><a href="https://www.youtube.com/channel/UC_vz6SvmIkYs1_H3Wv2SKlg" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_legal}>
          <p>&copy; 2022 Company. All rights reserved.</p>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
           
          </ul>
        </div>
     
      </div>
     
    </footer>
  );
};

export default Footer;
