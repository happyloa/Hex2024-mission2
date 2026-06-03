"use client";

import { useEffect, useRef } from "react";

import styles from "./WorkModal.module.css";

export default function WorkModal({ isOpen, toggleModal, title, description }) {
  const dialogRef = useRef(null);

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
    <dialog
      ref={dialogRef}
      className={styles.work_modal}
      onClick={handleBackdropClick}>
      <img
        src="/image/icon/close.svg"
        alt="關閉 Modal"
        className={styles.close_icon}
        onClick={toggleModal}
      />
      <section className={styles.text_wrapper}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={styles.intro}>
          <p>
            STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。
            <br className={styles.desktop_br} />
            主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。
          </p>
          <div>
            <span>
              設計原則：
              <br />
              宇宙旅行、深色背景、強烈視覺效果
            </span>
            <span>
              開發方式：
              <br />
              Bootstrap、Javascript、RWD
            </span>
          </div>
        </div>
      </section>
      <section className={styles.main_content}>
        <figure>
          <img src="/image/work/modal/modal-image1.webp" alt="星際旅行主視覺展示" />
          <h4>主視覺</h4>
          <figcaption>
            可直接設定日期、起迄星球、張數，快速查詢可購買的票券。
          </figcaption>
        </figure>
        <figure>
          <img src="/image/work/modal/modal-image2.webp" alt="星際旅行推薦查詢畫面" />
          <h4>推薦查詢</h4>
          <figcaption>
            給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。
          </figcaption>
        </figure>
      </section>
    </dialog>
  );
}
