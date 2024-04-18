import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import prev from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";
import { productData } from "../data.js";
import CartContext from "../context/CartContext.jsx";

const Main = ({ showModal }) => {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const { quantity, addToCart, plusOne, minusOne } = useContext(CartContext);

  useEffect(() => {
    setProduct(productData);
    setMainImage(productData.images[0]);
  }, []);

  const handleChangeImage = (th) => {
    const image = product.images.find((item) => item.th === th);
    if (image) {
      setMainImage(image);
    }
  };
  const prevImage = () => {
    const currentIndex = product.images.findIndex(
      (item) => item.pic === mainImage.pic
    );
    if (currentIndex > 0) {
      setMainImage(product.images[currentIndex - 1]);
    } else {
      setMainImage(product.images[product.images.length - 1]);
    }
  };
  const nextImage = () => {
    const currentIndex = product.images.findIndex(
      (item) => item.pic === mainImage.pic
    );
    if (currentIndex < product.images.length - 1) {
      setMainImage(product.images[currentIndex + 1]);
    } else {
      setMainImage(product.images[0]);
    }
  };
  return (
    <div className="w-full">
      <div className="md:w-10/12 mx-auto flex flex-col md:flex-row gap-4 md:gap-4 md:px-20 mt-4 md:mt-20">
        <div className="w-full md:w-1/2 flex flex-col items-center relative">
          <img
            onClick={showModal}
            src={mainImage && mainImage.pic}
            className="cursor-pointer w-full object-fit md:rounded-xl md:w-4/5"
            alt=""
          />
          <div className="w-full h-full px-4 absolute md:hidden flex flex-row justify-between items-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <img onClick={prevImage} src={prev} alt="" />
            </div>
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
              <img onClick={nextImage} src={next} alt="" />
            </div>
          </div>
          <div className="hidden md:flex flex-row gap-4 w-4/5 justify-between mt-4">
            {product &&
              product.images.map((item) => (
                <img
                  onClick={() => handleChangeImage(item.th)}
                  key={item.th}
                  src={item.th}
                  alt=""
                  className={`cursor-pointer object-fit w-1/5 rounded-xl ${
                    mainImage.th === item.th
                      ? "opacity-70 border-2 border-orange"
                      : ""
                  }`}
                />
              ))}
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="mt-2 md:mt-16 uppercase text-orange text-lg font-bold">
            {product && product.company}
          </h2>
          <h1 className="mt-10 capitalize text-5xl font-bold">
            {product && product.name}
          </h1>
          <p className="mt-10 text-base text-darkGrayishBlue">
            {product && product.description}
          </p>
          <div className="flex flex-row md:flex-col items-center gap-4 justify-between md:justify-start md:items-start">
            <div className="flex flex-row gap-6 items-center mt-4">
              <div className="text-4xl font-bold">
                <p>${product && product.discountedPrice.toFixed(2)}</p>
              </div>
              <div className="bg-paleOrange text-orange py-1 px-2 font-bold rounded-lg">
                <p>50%</p>
              </div>
            </div>
            <div className="text-grayishBlue line-through font-bold mt-2">
              <p>${product && product.price.toFixed(2)}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <div className="w-full md:w-2/5">
              <div className="bg-lightGrayishBlue rounded-xl flex flex-row items-center justify-between">
                <button
                  onClick={() => minusOne(product.id)}
                  className="p-4 text-orange text-2xl font-bold"
                >
                  -
                </button>
                <p className="text-xl font-bold">{quantity}</p>
                <button
                  onClick={() => plusOne(product.id)}
                  className="p-4 text-orange text-2xl font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <button
                onClick={() => addToCart(product.id)}
                className="w-full bg-orange text-white rounded-xl py-4 px-8 flex flex-row gap-4 
              items-center justify-center active:opacity-70"
              >
                <AiOutlineShoppingCart size={32} /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
