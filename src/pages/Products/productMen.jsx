import { useState } from "react";
import styles from "./Products.module.scss";
import GoToTop from "../../components/GoToTop";

// img quần short
import Short01 from "../../assets/products-img/Short01.png";
import Short02 from "../../assets/products-img/Short03.png";
import Short03 from "../../assets/products-img/Short04.png";
import Short04 from "../../assets/products-img/Short05.png";
import Short05 from "../../assets/products-img/Short06.png";

// img quần dài
import Pants06 from "../../assets/products-img/Pants06.png";
import Pants07 from "../../assets/products-img/Pants07.png";
import Pants08 from "../../assets/products-img/Pants08.png";
import Pants09 from "../../assets/products-img/Pants09.png";

// img Hooldie &  Áo Khoác
import Hoodie10 from "../../assets/products-img/Hoodie10.png";
import Hoodie11 from "../../assets/products-img/Hoodie11.png";
import Hoodie12 from "../../assets/products-img/Hoodie12.png";
import Hoodie13 from "../../assets/products-img/Hoodie13.png";
import Hoodie14 from "../../assets/products-img/Hoodie14.png";

//Áo Phông &  Áo Kiểu
import TShirt15 from "../../assets/products-img/TShirt15.png";
import TShirt16 from "../../assets/products-img/TShirt16.png";
import TShirt17 from "../../assets/products-img/TShirt17.png";
import TShirt18 from "../../assets/products-img/TShirt18.png";
import TShirt19 from "../../assets/products-img/TShirt19.png";

const PRODUCTS = {
  shorts: [
    {
      id: 1,
      name: 'Hybrid Graphic 7" Shorts',
      fit: "Slim fit",
      price: 30,
      img: Short01,
      link: "https://www.gymshark.com/products/gymshark-gymshark-lifting-barbell-mesh-5-short-shorts-black-aw25",
    },
    {
      id: 2,
      name: "Training Shorts",
      fit: "Oversize",
      price: 60,
      img: Short02,
      link: "https://www.gymshark.com/products/gymshark-lifting-mesh-5-shorts-shorts-green-ss25",
    },
    {
      id: 3,
      name: "Arrival Shorts",
      fit: "Slim fit",
      price: 28,
      img: Short03,
      link: "https://row.gymshark.com/products/gymshark-arrival-5-shorts-core-olive-ss22",
    },
    {
      id: 4,
      name: "Sport Shorts",
      fit: "Slim fit",
      price: 30,
      img: Short04,
      link: "https://row.gymshark.com/products/gymshark-sport-5-shorts-shorts-blue-aw25-1",
    },
    {
      id: 5,
      name: "Running Shorts",
      fit: "Slim fit",
      price: 30,
      img: Short05,
      link: "https://row.gymshark.com/products/gymshark-running-short-6-shorts-brown-aw25",
    },
  ],

  pants: [
    {
      id: 6,
      name: "Power x Frazetta Joggers",
      fit: "Oversized",
      price: 76,
      img: Pants06,
      link: "https://www.gymshark.com/products/gymshark-power-washed-jogger-pants",
    },
    {
      id: 7,
      name: "Wide Leg Jogger",
      fit: "Oversized",
      price: 60,
      img: Pants07,
      link: "https://www.gymshark.com/products/gymshark-colegiate-washed-wide-leg-jogger-pants-grey-aw25",
    },
    {
      id: 8,
      name: "Washed Jogger",
      fit: "Slim fit",
      price: 28,
      img: Pants08,
      link: "https://www.gymshark.com/products/gymshark-colegiate-washed-wide-leg-jogger-pants-grey-aw25",
    },
    {
      id: 9,
      name: "Straight Leg Pants",
      fit: "Slim fit",
      price: 30,
      img: Pants09,
      link: "https://www.gymshark.com/products/gymshark-straight-leg-pumper-pants-pants-purple-aw25",
    },
  ],

  hoodie: [
    {
      id: 10,
      name: "Crest Oversized Hoodie",
      fit: "Oversized",
      price: 76,
      img: Hoodie10,
      link: "https://www.gymshark.com/products/gymshark-crest-oversized-hoodie-black-ss24",
    },
    {
      id: 11,
      name: "GS66 Hoodie",
      fit: "Oversized",
      price: 50,
      img: Hoodie11,
      link: "https://www.gymshark.com/products/gymshark-gs66-hoodie-pullovers-black-aw25",
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
      name: "Contrast Track Top",
      fit: "Slim fit",
      price: 24,
      img: Hoodie13,
      link: "https://www.gymshark.com/products/gymshark-contrast-track-top-jackets-outerwear-black-ss25",
    },
    {
      id: 14,
      name: "Crest Zip Hoodie",
      fit: "Slim fit",
      price: 48,
      img: Hoodie14,
      link: "https://www.gymshark.com/products/gymshark-crest-oversized-zip-up-hoodie-black-aw23",
    },
  ],

  tshirt: [
    {
      id: 15,
      name: "Power T-Shirt",
      fit: "Oversized",
      price: 36,
      img: TShirt15,
      link: "https://www.gymshark.com/products/gymshark-power-t-shirt-ss-tops-grey-aw25-4",
    },
    {
      id: 16,
      name: "Drop Arm Tank",
      fit: "Slim fit",
      price: 24,
      img: TShirt16,
      link: "https://www.gymshark.com/products/gymshark-critical-drop-arm-tank-black-ss25",
    },
    {
      id: 17,
      name: "Essential Oversized T-Shirt",
      fit: "Oversized",
      price: 18.2,
      img: TShirt17,
      link: "https://www.gymshark.com/products/gymshark-essential-oversized-t-shirt-charcoal-grey-marl-ss23",
    },
    {
      id: 18,
      name: "Arrival Oversized T-Shirt",
      fit: "Slim fit",
      price: 26,
      img: TShirt18,
      link: "https://www.gymshark.com/products/gymshark-arrival-oversized-t-shirt-ss-tops-grey-aw25",
    },
    {
      id: 19,
      name: "Apex Seamless T-Shirt",
      fit: "Slim fit",
      price: 46,
      img: TShirt19,
      link: "https://www.gymshark.com/products/gymshark-apex-seamless-t-shirt-ss-tops-teal-aw25",
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
  shorts: "https://www.gymshark.com/collections/shorts/mens",
  pants: "https://www.gymshark.com/collections/joggers/mens",
  hoodie: "https://www.gymshark.com/collections/hoodies/mens",
  tshirt: "https://www.gymshark.com/collections/t-shirts-tops/mens",
};

export default function ProductMen() {
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
