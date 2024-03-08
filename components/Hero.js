import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div>
        <Image
          src="/illustration-hero.svg"
          alt="illustration-hero bookmark "
          width={657}
          height={466}
        />
      </div>
      <article>
        <h1> A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <button>Get it on Chrome</button>
        <button>Get it on Firefox</button>
      </article>
    </section>
  );
};

export default Hero;
