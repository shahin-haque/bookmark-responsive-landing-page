"use client";
import React, { useState } from "react";
import styles from "./Faq.module.css";
import Image from "next/image";

const FAQs = [
  {
    queation: "  What is Bookmark?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    queation: "  How can I request a new browser",
    ans: " Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis  ultricies. Mauris augue massa, ultricies non ligula. Suspendisse  imperdiet.",
  },
  {
    queation: "Is there a mobile app?",
    ans: "  Sed consectetur quam id neque fermentum accumsan. Praesent luctus  vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula  quis est pharetra mattis sitpharetra purus. Sed sollicitudin  ex et ultricies bibendum.",
  },
  {
    question: "  What about other Chromium browsers?",
    ans: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam neque eget nisl gravida pellentesque non ut velit.",
  },
];

const Faq = () => {
  const [ShowAnswer, setShowAnswer] = useState(false);
  return (
    <section className={styles.faq_wrapper}>
      <article className={styles.faq_head}>
        <h2>Frequently Asked Questions </h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <Image src="/icon-arrow.svg" width={18} height={12} alt="arrow-icon" />
      </article>

      <div className="question-answer-wrapper">
        {FAQs.map((items) => (
          <div key={items.queation}>{items.queation} </div>
        ))}
      </div>

      <button className="btn-primary">More Info</button>
    </section>
  );
};

export default Faq;
