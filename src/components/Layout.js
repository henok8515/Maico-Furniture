// Layout.js
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import NewItems from "./NewItems";
import FeaturesSecond from "./FeaturesSecond";
import Products from "./Products";
import NewsLetters from "./NewsLetters";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <NewsLetters />
      <Footer />
    </>
  );
};

export default Layout;
