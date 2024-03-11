"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Features.module.css";
import featureTabInfo from "./FeaturesTabInfo";

const Features = () => {
  const [TqbIndexNum, setTqbIndexNum] = useState(0);
  return (
    <article className={styles.features}>
      <div>
        <h3>Features</h3>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <section>
        <div className={styles.tab_qus}>
          {featureTabInfo.map((item, index) => (
            <div key={index} onClick={() => setTqbIndexNum(index)}>
              {item.tabHeadline}
            </div>
          ))}
        </div>
        <div className={styles.tab_ans}>
          <Image src={featureTabInfo[TqbIndexNum].tabImg} alt="illustration" />
          <div>
            <h3>{featureTabInfo[TqbIndexNum].tabHead}</h3>
            <p>{featureTabInfo[TqbIndexNum].tabDetaisl}</p>
            <button className="btn-primary">More Info</button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Features;
