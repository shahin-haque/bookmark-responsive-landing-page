import React from "react";
import styles from "./Subscribe.module.css";
const Subscribe = () => {
  return (
    <article className={styles.form_wrapper}>
      <p>35,000+ already joined</p>
      <h3> Stay up-to-date with what we’re doing</h3>
      <form action="">
        <input type="email" placeholder="Enter Your Email Address" />
        <button className="btn-secondary" type="submit">
          Contact Us
        </button>
      </form>
    </article>
  );
};

export default Subscribe;
