import React from "react";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Extension from "../../components/Extension";
import Faq from "../../components/Faq";
import Subscribe from "../../components/Subscribe";

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Extension />
      <Faq />
      <Subscribe />
    </main>
  );
}

export default Home;
