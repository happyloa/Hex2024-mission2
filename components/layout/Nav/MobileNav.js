"use client";

import { useState } from "react";
import Link from "next/link";
import NavLists from "./NavLists";
import { useDialog } from "@/lib/useDialog";

import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const { dialogRef, handleBackdropClick } = useDialog(isOpen, toggleModal);

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
        className={styles.mobile_dialog}>
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
