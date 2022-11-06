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
    <nav>
      <ul>
        {links.map(({ label, route }) => (
          <li className={styles.navigation} key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
