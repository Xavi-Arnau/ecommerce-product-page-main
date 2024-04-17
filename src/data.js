import img1 from "./assets/image-product-1.jpg";
import th1 from "./assets/image-product-1-thumbnail.jpg";
import img2 from "./assets/image-product-2.jpg";
import th2 from "./assets/image-product-2-thumbnail.jpg";
import img3 from "./assets/image-product-3.jpg";
import th3 from "./assets/image-product-3-thumbnail.jpg";
import img4 from "./assets/image-product-4.jpg";
import th4 from "./assets/image-product-4-thumbnail.jpg";

export const productData = {
  id: 1,
  name: "Fall Limited Edition Sneakers",
  company: "SNEAKER COMPANY",
  description: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber outer sole, they'll withstand everything
  the weather can offer.`,
  price: 250,
  discountedPrice: 125,
  discount: "50%",
  images: [
    { pic: img1, th: th1 },
    { pic: img2, th: th2 },
    { pic: img3, th: th3 },
    { pic: img4, th: th4 },
  ],
};
