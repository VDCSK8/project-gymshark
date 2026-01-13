import { useState } from "react";
import styles from "./Products.module.scss";
import GoToTop from "../../components/GoToTop";

// img quần short
import Short1 from "../../assets/products-women-img/Short1.png";
import Short2 from "../../assets/products-women-img/Short2.png";
import Short3 from "../../assets/products-women-img/Short3.png";
import Short4 from "../../assets/products-women-img/Short4.png";
import Short5 from "../../assets/products-women-img/Short5.png";

// img quần dài
import Pants6 from "../../assets/products-women-img/Pants6.png";
import Pants7 from "../../assets/products-women-img/Pants7.png";
import Pants8 from "../../assets/products-women-img/Pants8.png";
import Pants9 from "../../assets/products-women-img/Pants9.png";

// img Hooldie &  Áo Khoác
import Hoodie10 from "../../assets/products-women-img/Hoodie10.png";
import Hoodie11 from "../../assets/products-women-img/Hoodie11.png";
import Hoodie12 from "../../assets/products-women-img/Hoodie12.png";
import Hoodie13 from "../../assets/products-women-img/Hoodie13.png";

//Áo Phông &  Áo Kiểu
import TShirt14 from "../../assets/products-women-img/TShirt14.png";
import TShirt15 from "../../assets/products-women-img/TShirt15.png";
import TShirt16 from "../../assets/products-women-img/TShirt16.png";
import TShirt17 from "../../assets/products-women-img/TShirt17.png";
import TShirt18 from "../../assets/products-women-img/TShirt18.png";

const PRODUCTS = {
  shorts: [
    {
      id: 1,
      name: "Running 2-in-1 Shorts",
      fit: "Slim fit",
      price: 48,
      img: Short1,
      link: "https://www.gymshark.com/products/gymshark-running-2-in-1-shorts-shorts-blue-aw25",
    },
    {
      id: 2,
      name: "Warp Short",
      fit: "Slim fit",
      price: 60,
      img: Short2,
      link: "https://www.gymshark.com/products/gymshark-warp-short-shorts",
    },
    {
      id: 3,
      name: "Vital 2-in-1 Shorts",
      fit: "Slim fit",
      price: 28,
      img: Short3,
      link: "https://www.gymshark.com/products/gymshark-vital-seamless-2-in-1-shorts-shorts-black-aw25",
    },
    {
      id: 4,
      name: "Sport Shorts",
      fit: "Slim fit",
      price: 30,
      img: Short4,
      link: "https://row.gymshark.com/products/gymshark-sport-5-shorts-shorts-blue-aw25-1",
    },
    {
      id: 5,
      name: "Vital Shorts",
      fit: "Slim fit",
      price: 40,
      img: Short5,
      link: "https://www.gymshark.com/products/gymshark-vital-seamless-shorts-dark-green-marl-logo",
    },
  ],

  pants: [
    {
      id: 6,
      name: "Training Fleece Straight Leg Joggers",
      fit: "Oversized",
      price: 44,
      img: Pants6,
      link: "https://www.gymshark.com/products/gymshark-power-washed-jogger-pants",
    },
    {
      id: 7,
      name: "Training Fleece Joggers",
      fit: "Oversized",
      price: 60,
      img: Pants7,
      link: "https://www.gymshark.com/products/gymshark-training-fleece-joggers-light-grey-core-marl-aw23",
    },
    {
      id: 8,
      name: "Washed Jogger",
      fit: "Slim fit",
      price: 28,
      img: Pants8,
      link: "https://www.gymshark.com/products/gymshark-colegiate-washed-wide-leg-jogger-pants-grey-aw25",
    },
    {
      id: 9,
      name: "Straight Leg Pants",
      fit: "Slim fit",
      price: 30,
      img: Pants9,
      link: "https://www.gymshark.com/products/gymshark-straight-leg-pumper-pants-pants-purple-aw25",
    },
  ],

  hoodie: [
    {
      id: 10,
      name: "Training Oversized Fleece Hoodie",
      fit: "Oversized",
      price: 46,
      img: Hoodie10,
      link: "https://www.gymshark.com/products/gymshark-training-oversized-fleece-hoodie-black-aw23",
    },
    {
      id: 11,
      name: "Cosy Luxe Hoodie",
      fit: "Oversized",
      price: 60,
      img: Hoodie11,
      link: "https://www.gymshark.com/products/gymshark-cosy-luxe-hoodie-pullovers-grey-aw25",
    },
    {
      id: 12,
      name: "Après-Lift Club Hoodie",
      fit: "Oversized",
      price: 50,
      img: Hoodie12,
      link: "https://www.gymshark.com/products/gymshark-apres-lift-club-hoodie-pullovers-black-aw25",
    },
    {
      id: 13,
      name: "SuperSoft Zip Through Hoodie",
      fit: "Slim fit",
      price: 60,
      img: Hoodie13,
      link: "https://www.gymshark.com/products/gymshark-supersoft-zip-through-hoodie-pullovers-1",
    },
  ],

  tshirt: [
    {
      id: 14,
      name: "Flow Long Sleeve Crop Top with Cups",
      fit: "Oversized",
      price: 36,
      img: TShirt14,
      link: "https://www.gymshark.com/products/gymshark-flow-long-sleeve-crop-top-with-cups-ls-tops-1",
    },
    {
      id: 15,
      name: "Flow Long Sleeve Crop Top with Cups",
      fit: "Oversized",
      price: 36,
      img: TShirt15,
      link: "https://www.gymshark.com/products/gymshark-flow-long-sleeve-crop-top-with-cups-ls-tops",
    },
    {
      id: 16,
      name: "Vital Crop Top",
      fit: "Slim fit",
      price: 24,
      img: TShirt16,
      link: "https://www.gymshark.com/products/gymshark-vital-seamless-2-0-crop-top-black-marl-ss23",
    },
    {
      id: 17,
      name: "Halter Neck Cami with Shelf",
      fit: "Oversized",
      price: 18.2,
      img: TShirt17,
      link: "https://www.gymshark.com/products/gymshark-halter-neck-cami-with-shelf-white-ss24",
    },
    {
      id: 18,
      name: "Juicy Peach Short Sleeve T-Shirt",
      fit: "Slim fit",
      price: 26,
      img: TShirt18,
      link: "https://www.gymshark.com/products/gymshark-juicy-peach-short-sleeve-t-shirt-ss-tops-pink-aw25",
    },
  ],
};

const CATEGORY_LABELS = {
  shorts: "Quần Short",
  pants: "Quần Dài",
  hoodie: "Hoodie & Áo Khoác",
  tshirt: "Áo Phông & Áo Kiểu",
};

const CATEGORY_LINKS = {
  shorts: "https://www.gymshark.com/collections/shorts/womens",
  pants: "https://www.gymshark.com/collections/joggers/womens",
  hoodie: "https://www.gymshark.com/collections/hoodies/womens",
  tshirt: "https://www.gymshark.com/collections/t-shirts-tops/womens",
};

export default function ProductWomen() {
  const [category, setCategory] = useState("shorts");

  const filteredProducts = PRODUCTS[category];

  return (
    <main className={styles.product}>
      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.product__top}>
          <div className={styles.product__info}>
            <h4 className={styles.product__gender}>Nam giới</h4>
            <h2 className={styles.product__title}>SẢN PHẨM ĐƯỢC LỰA CHỌN</h2>
            <p className={styles.product__desc}>
              Các sản phẩm Gymshark hot nhất dành cho nam
            </p>
          </div>

          {/* filters */}
          <div className={styles.product__filters}>
            <button
              onClick={() => setCategory("shorts")}
              className={`${styles.product__filter} ${
                category === "shorts" ? styles.active : ""
              }`}
            >
              Quần Short
            </button>

            <button
              onClick={() => setCategory("pants")}
              className={`${styles.product__filter} ${
                category === "pants" ? styles.active : ""
              }`}
            >
              Quần Dài
            </button>

            <button
              onClick={() => setCategory("hoodie")}
              className={`${styles.product__filter} ${
                category === "hoodie" ? styles.active : ""
              }`}
            >
              Hooldie & Áo Khoác
            </button>

            <button
              onClick={() => setCategory("tshirt")}
              className={`${styles.product__filter} ${
                category === "tshirt" ? styles.active : ""
              }`}
            >
              Áo Phông & Áo Kiểu
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className={styles.product__grid}>
          <h3>{CATEGORY_LABELS[category]}</h3>

          <div>
            {filteredProducts.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={styles.product__item}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.product__img}
                />
                <div className={styles.product__content}>
                  <h4 className={styles.product__name}>{item.name}</h4>
                  <span className={styles.product__fit}>{item.fit}</span>
                  <h3 className={styles.product__price}>${item.price}</h3>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={CATEGORY_LINKS[category]}
            target="_blank"
            rel="noreferrer"
            className={styles.product__viewMore}
          >
            Xem chi tiết
          </a>
        </div>
      </div>
      <GoToTop />
    </main>
  );
}
