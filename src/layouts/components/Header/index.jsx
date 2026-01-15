import { NavLink, useMatch } from "react-router-dom";
import { useState } from "react";
import Logo from "../Logo";
import styles from "./Header.module.scss";

export default function Header() {
  const isProducts = useMatch("/products/*");
  const isLookBook = useMatch("/look-book/*");
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* LOGO */}
          <NavLink
            to="/"
            className={styles.logo}
            onClick={() => setOpen(false)}
          >
            <Logo />
          </NavLink>

          {/* HAMBURGER */}
          <button className={styles.hamburger} onClick={() => setOpen(true)}>
            ☰
          </button>

          {/* OVERLAY */}
          <div
            className={`${styles.overlay} ${open ? styles.show : ""}`}
            onClick={() => setOpen(false)}
          />

          {/* MENU */}
          <div className={`${styles.menu} ${open ? styles.open : ""}`}>
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/brands"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Brands
            </NavLink>

            {/* PRODUCTS */}
            <span
              className={`${styles.link} ${isProducts ? styles.active : ""}`}
            >
              Products
            </span>
            <div className={styles.dropdownMenu}>
              <NavLink
                to="/products/men"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subLink} ${styles.subActive}`
                    : styles.subLink
                }
              >
                Men
              </NavLink>

              <NavLink
                to="/products/women"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subLink} ${styles.subActive}`
                    : styles.subLink
                }
              >
                Women
              </NavLink>
            </div>

            {/* LOOKBOOK */}
            <span
              className={`${styles.link} ${isLookBook ? styles.active : ""}`}
            >
              LookBook
            </span>

            <div className={styles.dropdownMenu}>
              <NavLink
                to="/look-book/book01"
                end
                onClick={() => setOpen(false)} // ✅ thêm
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subLink} ${styles.subActive}`
                    : styles.subLink
                }
              >
                ONYX VER1
              </NavLink>

              <NavLink
                to="/look-book/book02"
                end
                onClick={() => setOpen(false)} // ✅ thêm
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subLink} ${styles.subActive}`
                    : styles.subLink
                }
              >
                ONYX VER2
              </NavLink>

              <NavLink
                to="/look-book/book03"
                end
                onClick={() => setOpen(false)} // ✅ thêm
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subLink} ${styles.subActive}`
                    : styles.subLink
                }
              >
                ONYX VER3
              </NavLink>

              <NavLink
                to="/look-book/book04"
                end
                onClick={() => setOpen(false)} // ✅ thêm
                className={({ isActive }) =>
                  isActive
                    ? `${styles.subLink} ${styles.subActive}`
                    : styles.subLink
                }
              >
                ADAPT Seamless
              </NavLink>
            </div>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
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
