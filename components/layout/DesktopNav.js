"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "首頁" },
    { href: "/portfolio", label: "作品集" },
    { href: "/services", label: "服務項目" },
    { href: "/blog", label: "部落格" },
    { href: "/contact", label: "聯絡我" },
  ];

  return (
    <nav className={styles.desktop_nav}>
      <ul className={styles.lists_wrapper}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              <span
                className={`${styles["border"]} ${styles["top-left"]}`}
                style={{ opacity: isActive ? 1 : 0 }}></span>
              <span
                className={`${styles["border"]} ${styles["top-right"]}`}
                style={{ opacity: isActive ? 1 : 0 }}></span>
              <span
                className={`${styles["border"]} ${styles["bottom-left"]}`}
                style={{ opacity: isActive ? 1 : 0 }}></span>
              <span
                className={`${styles["border"]} ${styles["bottom-right"]}`}
                style={{ opacity: isActive ? 1 : 0 }}></span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
