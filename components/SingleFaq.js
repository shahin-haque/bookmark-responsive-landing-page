import Image from "next/image";
import styles from "./Faq.module.css";
import React, { useState } from "react";

const SingleFaq = ({ data }) => {
  const [ShowAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className={styles.que} onClick={() => setShowAnswer(!ShowAnswer)}>
        {data.question}
        <Image
          src="/icon-arrow.svg"
          width={18}
          height={12}
          alt="arrow-icon"
          className={`${styles.arrow_q} ${ShowAnswer ? styles.open : ""}`}
        />
      </div>
      <p className={`${styles.ans} ${ShowAnswer ? styles.open : ""}`}>
        {data.ans}
      </p>
    </>
  );
};

export default SingleFaq;
