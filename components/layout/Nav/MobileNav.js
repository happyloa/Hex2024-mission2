"use client";

import { useId, useState } from "react";
import Link from "next/link";
import NavLists from "./NavLists";
import { useDialog } from "@/lib/useDialog";

import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogId = useId();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const { dialogRef, handleBackdropClick } = useDialog(isOpen, toggleModal);

  return (
    <>
      <button type="button" className={styles.mobile_nav} aria-label="開啟選單" aria-expanded={isOpen} aria-controls={dialogId} onClick={toggleModal}>
        <img
          src="/image/icon/menu.svg"
          alt=""
          width={24}
          height={24}
        />
      </button>
      <dialog
        id={dialogId}
        aria-label="網站導覽"
        ref={dialogRef}
        onClick={handleBackdropClick}
        className={styles.mobile_dialog}>
        <Link href="/" className={styles.logo_link} onClick={toggleModal}>
          <img src="/image/logo.svg" alt="網站 Logo" width={90} height={40} />
        </Link>
        <button type="button" className={styles.close_btn} aria-label="關閉選單" onClick={toggleModal}>
          <img src="/image/icon/close.svg" alt="" width={24} height={24} />
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
