"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavLists from "./NavLists";

import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e) => {
      e.preventDefault();
      toggleModal();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [toggleModal]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      toggleModal();
    }
  };

  return (
    <>
      <button className={styles.mobile_nav} onClick={toggleModal}>
        <img
          src="/image/icon/menu.svg"
          alt="Open Menu"
        />
      </button>
      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className={styles.mobile_dialog}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "auto",
          width: "100%",
          maxWidth: "100%",
          margin: "0",
          border: "none",
          padding: "96px 0 40px",
          backgroundColor: "var(--white)",
          boxSizing: "border-box",
        }}>
        <Link href="/" className={styles.logo_link} onClick={toggleModal}>
          <img src="/image/logo.svg" alt="網站 Logo" />
        </Link>
        <button className={styles.close_btn} onClick={toggleModal}>
          <img src="/image/icon/close.svg" alt="Close Menu" />
        </button>
        <nav>
          <ul className={styles.lists_wrapper}>
            <NavLists onLinkClick={toggleModal} />
          </ul>
        </nav>
      </dialog>
    </>
  );
}
