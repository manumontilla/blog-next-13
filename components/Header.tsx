import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Posts",
    route: "/posts",
  },
  {
    label: "About",
    route: "/about",
  },
];

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerinner}>
      <h1>Titulo</h1>
      <nav>
        <ul className={styles.nav}>
          {links.map(({ label, route }) => (
            <li className={styles.navigation} key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
