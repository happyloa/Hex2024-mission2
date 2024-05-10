"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import Modal from "react-modal";
import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "首頁" },
    { href: "/portfolio", label: "作品集" },
    { href: "/services", label: "服務項目" },
    { href: "/blog", label: "部落格" },
    { href: "/contact", label: "聯絡我" },
  ];

  return (
    <>
      <button className={styles.mobile_nav} onClick={toggleModal}>
        <img
          src={isOpen ? "/image/icon/close.svg" : "/image/icon/menu.svg"}
          alt={isOpen ? "Close Menu" : "Open Menu"}
        />
      </button>
      <Modal
        overlayClassName={{
          base: styles.nav_overlay,
          afterOpen: styles.nav_overlayAfterOpen,
          beforeClose: styles.nav_overlayBeforeClose,
        }}
        closeTimeoutMS={300}
        isOpen={isOpen}
        onRequestClose={toggleModal}
        ariaHideApp={false}
        style={{
          content: {
            top: "0",
            left: "0",
            right: "0",
            bottom: "auto",
            padding: "96px 0 40px",
            backgroundColor: "#fff",
          },
        }}>
        <nav>
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
      </Modal>
    </>
  );
}
