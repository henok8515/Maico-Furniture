import { products } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

// Core modules imports are same as usual
import { Navigation, Pagination } from "swiper/modules";

// Importing React Icons
import { HiPlus } from "react-icons/hi";
import { useState } from "react";
import { useCart } from "./CartContext";

const ProductSlider = () => {
  const { pages } = products;
  const { state, dispatch } = useCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    console.log("Item added:", item); // Log the item being added

    alert(`${item.name} added to cart!`);
  };

  const pageSlider = pages.map((page, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg: gap-5 lg:gap-10">
          {page.productList.map((product, index) => (
            <div
              key={index}
              className="max-w-[290px] max-h-[400px] w-full text-left"
            >
              <div className="border hover:border-accent w-full max-w-[285px] h-[292px] flex items-center justify-center relative transition rounded-lg hover:shadow-md hover:cursor-pointer hover:transition">
                <img src={product.image.type} alt={product.name} />
                <div
                  className="absolute right-3 bottom-3 border-spacing-1 
						border-2 p-0.5 rounded-full bg-gray-300 transition"
                >
                  <HiPlus
                    onClick={() => addToCart(product)}
                    className="text-xl text-black"
                  />
                </div>
              </div>
              <div className="px-1 py-3">
                <h3
                  onClick={() => console.log(product.name)}
                  className="font-semibold text-base lg:text-xl"
                >
                  {product.name}
                </h3>
                <div className="flex gap-x-5 text-sm">
                  <p>{product.price} $</p>
                  <p className="opacity-60 line-through">
                    {product.oldPrice} $
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="productSlider relative min-h-[1330px]"
    >
      {pageSlider}
    </Swiper>
  );
};

export default ProductSlider;
