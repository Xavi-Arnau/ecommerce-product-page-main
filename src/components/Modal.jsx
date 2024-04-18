import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { productData } from "../data.js";
import prev from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";

const Modal = ({ onClose }) => {
  const [product, setProduct] = useState();
  const [mainImage, setMainImage] = useState(null);

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

  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-80 backgrop-blur-sm flex justify-center z-30"
    >
      <div className="w-6/12 mx-auto mt-20">
        <div className="flex flex-row justify-end w-1/2 mx-auto">
          <button onClick={onClose} className="text-white">
            <AiOutlineClose size={32} />
          </button>
        </div>
        <div className="w-1/2 mx-auto mt-10 relative flex flex-col items-center">
          <img
            className="object-fit rounded-xl"
            src={mainImage && mainImage.pic}
            alt=""
          />
          <div className="w-full h-full absolute flex flex-row justify-between items-center">
            <div className="cursor-pointer bg-white rounded-full w-14 h-14 flex items-center justify-center -ml-6">
              <img onClick={prevImage} src={prev} alt="" />
            </div>
            <div className="cursor-pointer bg-white rounded-full w-14 h-14 flex items-center justify-center -mr-6">
              <img onClick={nextImage} src={next} alt="" />
            </div>
          </div>
        </div>
        <div className="w-2/5 mx-auto flex flex-row gap-5 justify-between mt-8">
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
    </div>
  );
};

export default Modal;
