import Link from "next/link";

import styles from "./Header.module.css";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.elements_wrapper}>
        <Link href="/">
          <img
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/d796f511bed88b5468b1c02b9dc1f17048b1448f/2024%20web-camp/logo.svg"
            alt="網站 Logo"
          />
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
