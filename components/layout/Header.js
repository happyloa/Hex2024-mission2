import Link from "next/link";

import styles from "./Header.module.css";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.elements_wrapper}>
        <Link href="/">
          <img src="/image/logo.svg" alt="網站 Logo" />
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
