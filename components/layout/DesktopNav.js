"use client";

import Link from "next/link";
import { useEffect } from "react";

import styles from "./DesktopNav.module.css";

export default function DesktopNav() {
  useEffect(() => {
    // 選取所有連結
    const links = document.querySelectorAll(`nav ul li a`);

    links.forEach((link) => {
      // 為所有連結加上 mouseenter 監聽器
      link.addEventListener("mouseenter", function () {
        const boxes = link.parentNode.querySelectorAll("div");
        boxes.forEach((box) => {
          box.classList.add(styles.boxShow);
        });
      });

      // 為所有連結加上 mouseleave 監聽器
      link.addEventListener("mouseleave", function () {
        const boxes = link.parentNode.querySelectorAll("div");
        boxes.forEach((box) => {
          box.classList.remove(styles.boxShow);
        });
      });
    });
  }, []);

  return (
    <nav className={styles.desktop_nav}>
      <ul className={styles.lists_wrapper}>
        <li className={styles.nav_list}>
          <Link href="/" className={styles.nav_link}>
            首頁
            <div className={`${styles["box"]} ${styles["boxUpperLeft"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxUpperRight"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxLowerRight"]}`}></div>
            <div className={`${styles["box"]} ${styles["boxLowerLeft"]}`}></div>
          </Link>
        </li>
        <li className={styles.nav_list}>
          <Link href="/portfolio" className={styles.nav_link}>
            作品集
            <div className={`${styles["box"]} ${styles["boxUpperLeft"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxUpperRight"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxLowerRight"]}`}></div>
            <div className={`${styles["box"]} ${styles["boxLowerLeft"]}`}></div>
          </Link>
        </li>
        <li className={styles.nav_list}>
          <Link href="/services" className={styles.nav_link}>
            服務項目
            <div className={`${styles["box"]} ${styles["boxUpperLeft"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxUpperRight"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxLowerRight"]}`}></div>
            <div className={`${styles["box"]} ${styles["boxLowerLeft"]}`}></div>
          </Link>
        </li>
        <li className={styles.nav_list}>
          <Link href="/blog" className={styles.nav_link}>
            部落格
            <div className={`${styles["box"]} ${styles["boxUpperLeft"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxUpperRight"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxLowerRight"]}`}></div>
            <div className={`${styles["box"]} ${styles["boxLowerLeft"]}`}></div>
          </Link>
        </li>
        <li className={styles.nav_list}>
          <Link href="#" className={styles.nav_link}>
            聯絡我
            <div className={`${styles["box"]} ${styles["boxUpperLeft"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxUpperRight"]}`}></div>
            <div
              className={`${styles["box"]} ${styles["boxLowerRight"]}`}></div>
            <div className={`${styles["box"]} ${styles["boxLowerLeft"]}`}></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
