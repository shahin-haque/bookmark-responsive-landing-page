import React from "react";

const Faq = () => {
  return (
    <section>
      <article className="">
        <h2>Frequently Asked Questions </h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </article>
      <div className="question-answer-wrapper">
        <p className="question">What is Bookmark?</p>
        <p className="answer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis
          quam ornare mattis.
        </p>
      </div>
      {/* 2 */}
      <div className="question-answer-wrapper">
        <p className="question"> How can I request a new browser?</p>
        <p className="answer">
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
          ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
          aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
          Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </p>
      </div>
      {/* 3 */}
      <div className="question-answer-wrapper">
        <p className="question"> Is there a mobile app?</p>
        <p className="answer">
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus
          vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
          quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex
          et ultricies bibendum.
        </p>
      </div>
      {/* 4 */}
      <div className="question-answer-wrapper">
        <p className="question"> What about other Chromium browsers?</p>
        <p className="answer">
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
          mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque
          non ut velit.
        </p>
      </div>
      <button className="btn-primary">More Info</button>
    </section>
  );
};

export default Faq;
