import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo click về Home */}
        <NavLink to="/" className={styles.logo}>
          <Logo />
        </NavLink>

        <div className={styles.menu}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Brands
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/look-book"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            LookBook
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
