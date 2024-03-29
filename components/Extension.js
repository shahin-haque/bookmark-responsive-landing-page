import Image from "next/image";
import React from "react";
import styles from "./Extension.module.css";

const Extension = () => {
  return (
    <section className={styles.extension}>
      <div className={styles.extension_head}>
        <h2> Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className={styles.extension_icon_wrapper}>
        <div className={styles.extension_icon}>
          <Image
            src="/logo-chrome.svg"
            alt="logo-chrome"
            width={102}
            height={100}
          />
          <p>Add to Chrome</p>
          <p>Minimum version 62</p>
          <Image src="/bg-dots.svg" alt="dot image" width={280} height={4} />
          <button className="btn-primary">Add & Install Extension</button>
        </div>
        <div className={styles.extension_icon}>
          <Image
            src="/logo-firefox.svg"
            alt="logo-chrome"
            width={105}
            height={100}
          />
          <p>Add to Firefox</p>
          <p>Minimum version 55</p>
          <Image src="/bg-dots.svg" alt="dot image" width={280} height={4} />
          <button className="btn-primary">Add & Install Extension</button>
        </div>
        <div className={styles.extension_icon}>
          <Image
            src="/logo-opera.svg"
            alt="logo-chrome"
            width={96}
            height={100}
          />
          <p>Add to Opera</p>
          <p>Minimum version 46</p>
          <Image src="/bg-dots.svg" alt="dot image" width={280} height={4} />
          <button className="btn-primary">Add & Install Extension</button>
        </div>
      </div>
    </section>
  );
};

export default Extension;
