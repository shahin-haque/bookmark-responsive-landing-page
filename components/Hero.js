import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_img}>
        <Image
          src="/illustration-hero.svg"
          alt="illustration-hero bookmark "
          width={657}
          height={466}
        />
      </div>
      <article className={styles.hero_info}>
        <h1> A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <span className={styles.btn_wrapper}>
          <button className="btn-primary">Get it on Chrome</button>
          <button className="btn-secondary third">Get it on Firefox</button>
        </span>
      </article>
    </section>
  );
};

export default Hero;
