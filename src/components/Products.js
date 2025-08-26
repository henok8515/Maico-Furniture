import React from "react";
import { products } from "../data";
import ProductSlider from "./ProductSlider";

const Products = React.forwardRef((props, ref) => {
  // Accept props
  const { title, subtitle } = products;

  return (
    <section className="section" ref={ref}>
      {" "}
      {/* Pass the ref to the section */}
      <div id="target-section" className="container mx-auto">
        <h1 className="title text-center">{title}</h1>
        <h3 className="subtitle text-center">{subtitle}</h3>

        {/* Products */}
        <ProductSlider />
      </div>
    </section>
  );
});

export default Products;
