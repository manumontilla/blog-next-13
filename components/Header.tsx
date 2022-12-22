import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../public/logo_transparent.png";

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
    <title>bichos.dev</title>
    <div className={styles.headerinner}>
      {/* <img src="./logo_transparent.png" className={styles.logo}></img> */}
      <Image alt="logo" src={logo} className={styles.logo} placeholder="blur" />
      {/* <h1>Titulo</h1> */}
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
