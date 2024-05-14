"use client";

import { useState } from "react";

import Modal from "react-modal";
import NavLists from "./NavLists";

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
            backgroundColor: "var(--white)",
          },
        }}>
        <nav>
          <ul className={styles.lists_wrapper}>
            <NavLists onLinkClick={toggleModal} />
          </ul>
        </nav>
      </Modal>
    </>
  );
}
