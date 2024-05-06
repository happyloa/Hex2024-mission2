"use client";

import Link from "next/link";
import { useState } from "react";

import Modal from "react-modal";
import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className={styles.mobile_nav} onClick={toggleModal}>
        <img
          src={isOpen ? "/close.svg" : "/menu.svg"}
          alt={isOpen ? "Close Menu" : "Open Menu"}
        />
      </button>
      <Modal
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
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
        }}>
        <nav>
          <ul className={styles.nav_list}>
            <li>
              <Link href="/">首頁</Link>
            </li>
            <li>
              <Link href="/portfolio">作品集</Link>
            </li>
            <li>
              <Link href="/services">服務項目</Link>
            </li>
            <li>
              <Link href="/blog">部落格</Link>
            </li>
            <li>
              <Link href="#">聯絡我們</Link>
            </li>
          </ul>
        </nav>
      </Modal>
    </>
  );
}
