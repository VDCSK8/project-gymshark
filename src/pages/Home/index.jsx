import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GoToTop from "../../components/GoToTop";
import styles from "./Home.module.scss";

import Banner1 from "../../assets/img/Banner1.png";
import Banner2 from "../../assets/img/Banner2.png";
import Banner3 from "../../assets/img/Banner3.png";

import whyGymShark_1 from "../../assets/img/whyGymShark_1.png";
import whyGymShark_2 from "../../assets/img/whyGymShark_2.png";

import insertMan from "../../assets/img/insertMan.png";
import insertWoman from "../../assets/img/insertWoman.png";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/brands");
  };
  const handleClickMan = () => {
    navigate("/products/men");
  };
  const handleClickWoman = () => {
    navigate("/products/women");
  };

  const banners = [Banner1, Banner2, Banner3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4500); // 4.5 giây đổi ảnh
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className={styles.home}>
      {/*  BANNER */}
      <section className={styles.hero}>
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className={`${styles.heroImage} ${
              index === current ? styles.active : ""
            }`}
          />
        ))}

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            “Train hard, stay focused, become unstoppable.”
          </h1>
        </div>
      </section>

      {/* WHY GYMSHARK */}
      <section className={styles.whyGymShark}>
        <div className={styles.container}>
          <div className={styles.whyContainer}>
            <div className={styles.whyImage}>
              <img src={whyGymShark_1} alt="Gymshark Image 1" />
              <img
                src={whyGymShark_2}
                alt="Gymshark Image 2"
                className={styles.whyGymShark_2}
              />
            </div>
            <div className={styles.whyContent}>
              <h2 className={styles.title}>WHY GYMSHARK?</h2>
              <ul className={styles.list}>
                <li>Cho người tập gym</li>
                <li>Tối ưu hiệu suất</li>
                <li>Thoáng khí, Linh hoạt</li>
                <li>Tin dùng toàn cầu</li>
              </ul>
              <button className={styles.buttonWatch} onClick={handleClick}>
                WATCH NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <div className={styles.featuredProducts}>
        <div className={styles.container}>
          <div className={styles.featuredProductsWrapper}>
            <div
              className={styles.featuredProductItem}
              onClick={handleClickMan}
            >
              <img src={insertMan} alt="Men's Collection" />
              <button>Shop Men</button>
            </div>
            <div
              className={styles.featuredProductItem}
              onClick={handleClickWoman}
            >
              <img src={insertWoman} alt="Women's Collection" />
              <button>Shop Women</button>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  );
}

export default Home;
