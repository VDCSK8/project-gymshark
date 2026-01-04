import { NavLink, useMatch } from "react-router-dom";
import Logo from "../Logo";
import styles from "./Header.module.scss";

export default function Header() {
  // match mọi route con của products và look-book
  const isProducts = useMatch("/products/*");
  const isLookBook = useMatch("/look-book/*");

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logo}>
          <Logo />
        </NavLink>

        <div className={styles.menu}>
          {/* HOME */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>

          {/* BRANDS */}
          <NavLink
            to="/brands"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Brands
          </NavLink>

          {/* PRODUCTS */}
          <div className={styles.dropdown}>
            <NavLink
              to="/products/men"
              onClick={(e) => e.preventDefault()}
              className={`${styles.link} ${isProducts ? styles.active : ""}`}
            >
              Products
            </NavLink>

            <div className={styles.dropdownMenu}>
              <h4 className={styles.headingDropdownMenu}>Collection</h4>
              <NavLink to="/products/men">Men</NavLink>
              <NavLink to="/products/women">Women</NavLink>
            </div>
          </div>

          {/* LOOKBOOK */}
          <div className={styles.dropdown}>
            <NavLink
              to="/look-book/look-book01"
              onClick={(e) => e.preventDefault()}
              className={`${styles.link} ${isLookBook ? styles.active : ""}`}
            >
              LookBook
            </NavLink>

            <div className={styles.dropdownMenu}>
              <h4 className={styles.headingDropdownMenu}>Collection</h4>
              <NavLink to="/look-book/look-book01">ONYX VER1</NavLink>
              <NavLink to="/look-book/look-book02">ONYX VER2</NavLink>
              <NavLink to="/look-book/look-book03">ONYX VER3</NavLink>
              <NavLink to="/look-book/look-book04">ADAPT Seamless</NavLink>
            </div>
          </div>

          {/* CONTACT */}
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
