import React from "react";
import Pricecard from "@/components/priceCard";
import styles from "@/styles/price.module.css";

const page = () => {
  return (
    <>
    <h1 className={styles.head}>OUR SERVICES</h1>
      <div className={styles.cards}>
        <Pricecard
          service="Seo"
          price="$200/Month"
          key1="
Keyword Research"
          key2="On-Page Optimization"
          key3="
Off-Page Optimization"
          key4="
Technical SEO"
        ></Pricecard>
        <Pricecard
          service="Mobile App"
          price="$1000"
          key1=""
          key2=""
          key3=""
          key4=""
        ></Pricecard>
        <Pricecard
          service="E-commerce Website"
          price="$600"
          key1="
Website Development"
          key2="
Product Catalog Management"
          key3="
User Experience (UX) Optimization"
          key4="Mobile Optimization"
        ></Pricecard>
      </div>
      <div className={styles.cards}>
        <Pricecard
          service="Redesign"
          price="$80"
          key1=""
          key2=""
          key3=""
          key4=""
        ></Pricecard>
        <Pricecard
          service="Normal Website"
          price="$300"
          key1="Website Design and Development"
          key2="Domain Name Registration
"
          key3="Web Hosting"
          key4="Responsive Design
"
        ></Pricecard>
        <Pricecard
          service="Wordpress site"
          price="$100"
          key1=""
          key2=""
          key3=""
          key4=""
        ></Pricecard>
      </div>
    </>
  );
};

export default page;
