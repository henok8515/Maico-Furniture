import React, { useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import NewItems from "./NewItems";
import FeaturesSecond from "./FeaturesSecond";
import Products from "./Products";
import NewsLetters from "./NewsLetters";
import Footer from "./Footer";

const Layout = () => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Ref is null.");
    }
  };

  return (
    <>
      <Header />
      <Hero scrollToSection={scrollToSection} />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products ref={sectionRef} /> {/* Pass the ref here */}
      {/* <NewsLetters /> */}
      <Footer />
    </>
  );
};

export default Layout;
