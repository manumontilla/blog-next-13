import Link from "next/link";
import styles from "./Header2.module.css";
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

const Header2 = () => (
  <header className={styles.header}>
    <div className={styles.title}>
      <Image alt="logo" src={logo} className={styles.logo} placeholder="blur" />
    </div>
    <div className={styles.title_options}></div>
    <div className={styles.title_options}> POST </div>
    <div className={styles.title_options_about_me}> ABOUT ME</div>
  </header>
);

export default Header2;
