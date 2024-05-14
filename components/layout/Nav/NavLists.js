"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavLists.module.css";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/portfolio", label: "作品集" },
  { href: "/services", label: "服務項目" },
  { href: "/blog", label: "部落格" },
  { href: "/contact", label: "聯絡我" },
];

export default function NavLists({ onLinkClick }) {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((item) => {
        // 當 href 是根路徑 "/" 時，確保 pathname 正好等於 "/"
        // 其他情況下，檢查 pathname 是否以 item.href 開頭並跟隨著 "/" 或是 pathname 正好等於 item.href
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href + "/") || pathname === item.href;
        return (
          <li key={item.href} className={styles.list}>
            <Link
              href={item.href}
              style={{ fontWeight: isActive ? 600 : 400 }}
              onClick={onLinkClick}>
              {item.label}
            </Link>
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
    </>
  );
}
