import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import styles from "./Footer.module.scss";
import Facebook from "../../../assets/icon/fb.svg";
import Instagram from "../../../assets/icon/ig.svg";
import Tiktok from "../../../assets/icon/tt.svg";
import Youtube from "../../../assets/icon/yb.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* COL 1 */}
        <div className={styles.brand}>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <p className={styles.desc}>
            Built for those who push limits. Gymshark designs performance-driven
            apparel that supports every workout and every goal. From the gym
            floor to the streets, our gear is made to help you move freely,
            train confidently, and perform at your best. This is more than
            activewear. This is a lifestyle.
          </p>
          {/* icon */}
          <div className={styles.socials}>
            <a
              href="https://www.facebook.com/Gymshark"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>

            <a
              href="https://www.instagram.com/gymshark/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>

            <a
              href="https://www.tiktok.com/@gymshark"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Tiktok} alt="Tiktok" />
            </a>

            <a
              href="https://www.youtube.com/@gymshark"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Youtube} alt="Youtube" />
            </a>
          </div>
        </div>

        {/* COL 2 */}
        <div className={styles.col}>
          <h4>Brands</h4>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Introduce
          </NavLink>
        </div>

        {/* COL 3 */}
        <div className={styles.col}>
          <h4>Products</h4>
          <NavLink
            to="/products/man"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Man
          </NavLink>
          <NavLink
            to="/products/woman"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Woman
          </NavLink>
        </div>

        {/* COL 4 */}
        <div className={styles.col}>
          <h4>Lookbook</h4>
          <NavLink
            to="/look-book"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Model
          </NavLink>
        </div>

        {/* COL 5 */}
        <div className={styles.col}>
          <h4>Contact</h4>

          <p className={styles.contactItem}>USA – Washington DC</p>

          <a href="tel:123456789" className={styles.link}>
            1234-56789
          </a>

          <a href="mailto:fitmakerrr@gmail.com" className={styles.link}>
            Fitmakerrr@gmail.com
          </a>
        </div>
      </div>

      <div className={styles.bottom}>© 2026 Gymshark. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
