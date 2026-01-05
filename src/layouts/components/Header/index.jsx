import { NavLink, useMatch } from "react-router-dom";
import Logo from "../Logo";
import styles from "./Header.module.scss";

export default function Header() {
  const isProducts = useMatch("/products/*");
  const isLookBook = useMatch("/look-book/*");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* LOGO */}
          <NavLink to="/" className={styles.logo}>
            <Logo />
          </NavLink>

          {/* MENU */}
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

            {/* PRODUCTS */}
            <div className={styles.dropdown}>
              <span
                className={`${styles.link} ${isProducts ? styles.active : ""}`}
              >
                Products
              </span>

              <div className={styles.dropdownMenu}>
                <h4 className={styles.headingDropdownMenu}>Collection</h4>
                <NavLink to="/products/men" className={styles.rowDropdownMenu}>
                  Men
                </NavLink>
                <NavLink
                  to="/products/women"
                  className={styles.rowDropdownMenu}
                >
                  Women
                </NavLink>
              </div>
            </div>

            {/* LOOKBOOK */}
            <div className={styles.dropdown}>
              <span
                className={`${styles.link} ${isLookBook ? styles.active : ""}`}
              >
                LookBook
              </span>

              <div className={styles.dropdownMenu}>
                <h4 className={styles.headingDropdownMenu}>Collection</h4>
                <NavLink
                  to="/look-book/book01"
                  className={styles.rowDropdownMenu}
                >
                  ONYX VER1
                </NavLink>
                <NavLink
                  to="/look-book/book02"
                  className={styles.rowDropdownMenu}
                >
                  ONYX VER2
                </NavLink>
                <NavLink
                  to="/look-book/book03"
                  className={styles.rowDropdownMenu}
                >
                  ONYX VER3
                </NavLink>
                <NavLink
                  to="/look-book/book04"
                  className={styles.rowDropdownMenu}
                >
                  ADAPT Seamless
                </NavLink>
              </div>
            </div>

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
      </div>
    </header>
  );
}
