import React from 'react';
import styles from "@/styles/vineet.module.css"

const Component = () => {
  return (
    <><div className={styles.heading}>
<h1>Why choose Us</h1>
<p>Our highly skilled engineers possess excellent technical knowledge and vast experience in utilizing the latest software standards, tools, platforms, frameworks, and technologies to deliver tailored solutions that meet your unique needs. We strive to deliver unparalleled solutions that exceed your expectations.</p>
    </div>


    <div className={styles.main}>
    <div className="max-w-xs bg-white border   border-gray-200 rounded-lg shadow dark:bg-white-900 bg-opacity-50 mb-20  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
      <a href="#">
        <img className="rounded-t-lg" src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Quality</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Quality is at the core of our values. Our team of experts takes a detail-oriented approach to every project, ensuring that each solution we deliver is robust, scalable, and tailored to your specific needs.
                                    </p>

      </div>
    </div>

    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 mb-20 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
      <a href="#">
        <img className="rounded-t-lg" src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Reliable</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">At Pandaje Web Services, we understand the importance of reliability in business relationships. That's why we prioritize timely communication, transparent project management, and a commitment to meeting deadlines.
                                    </p>

      </div>
    </div>
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 mb-20 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ">
      <a href="#">
        <img className="rounded-t-lg" src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Excellence</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">We strive for excellence in everything we do. From the quality of our code to the user experience of our solutions, we're constantly pushing ourselves to deliver the best possible results.
                                    </p>
      </div>
    </div>
    </div>
   </>
  );
};

export default Component;
