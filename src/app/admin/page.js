"use client"
import React, { useEffect, useState } from 'react';
import styles from "@/styles/admin.module.css";
import Deleteicon from '@/components/deleteicon';

const getData = async () => {
  try {
    const res = await fetch(`/api/users/contact/`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error Loading Data", error);
    return { topics: [] }; // Return empty array for 'topics'
  }
};

const Page = () => {
  const [topics, setTopics] = useState([]);
  const [serialNumbers, setSerialNumbers] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      const data = await getData();
      setTopics(data.topics.reverse()); // Reverse the array
    };

    fetchTopics();
  }, []);

  useEffect(() => {
    setSerialNumbers(
      topics.map((_, index) => index + 1)
    );
  }, [topics]);
 
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Serial No</th>
            <th className={styles.th}>Username</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Subject</th>
            <th className={styles.th}>Message</th>
            <th className={styles.th}><Deleteicon/></th>
          </tr>
        </thead>
        <tbody>
          {topics.map((t, index) => (
            <tr key={t._id}>
              <td className={styles.td}>{serialNumbers[index]}</td>
              <td className={styles.td}>{t.username}</td>
              <td className={styles.td}>{t.email}</td>
              <td className={styles.td}>{t.subject}</td>
              <td className={styles.td}>{t.message}</td>
              <td className={styles.td}><Deleteicon id={t._id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
