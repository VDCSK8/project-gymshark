import styles from "./LookBook.module.scss";

import LookBook03Img1 from "../../assets/img/LookBook03Img1.png";
import LookBook03Img2 from "../../assets/img/LookBook03Img2.png";
import LookBook03Img3 from "../../assets/img/LookBook03Img3.png";
import LookBook03Img4 from "../../assets/img/LookBook03Img4.png";

import GoToTop from "../../components/GoToTop";
export default function LookBook03() {
  return (
    <main className={styles.LookBook}>
      <div className={styles.container}>
        <div className={styles.LookBook__content}>
          <h2 className={styles.LookBook__title}>ONYX RETURNS VER3</h2>
          <h3 className={styles.LookBook__subtitle}>
            Maximise the physique you’ve earned
          </h3>
          <p className={styles.LookBook__desc}>
            Ôm sát cơ thể, tăng độ nổi khối cơ bắp và cảm giác chắc chắn khi tập
            nặng. Hệ panel thông minh giúp nhấn mạnh vai – ngực – lưng, tạo dáng
            chữ V rõ nét. Co giãn đa chiều, thoát mồ hôi nhanh, duy trì form áo
            dù tập cường độ cao. Thiết kế dành riêng cho các buổi tập nặng,
            compound lift và bodybuilding.
          </p>
        </div>

        <div className={styles.LookBook__gallery}>
          <img className={styles.LookBook__img} src={LookBook03Img1} alt="" />
          <img className={styles.LookBook__img} src={LookBook03Img2} alt="" />
          <img className={styles.LookBook__img} src={LookBook03Img3} alt="" />
          <img className={styles.LookBook__img} src={LookBook03Img4} alt="" />
        </div>
      </div><GoToTop />
    </main>
  );
}
