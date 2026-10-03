"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./WorkCard.module.css";

import WorkModal from "./WorkModal";

export default function WorkCard({
  imgSrc = `/image/work/work-image1.webp`,
  title = "請輸入作品標題",
  description = "請輸入作品描述",
  tags = ["作品標籤"],
}) {
  // 作品卡片：點擊後開啟詳情 Modal
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <article className={styles.card}>
        <div className={styles.img_wrapper}>
          <button
            type="button"
            className={styles.open_button}
            aria-label={`查看${title}作品詳情`}
            onClick={toggleModal}>
            <Image
              src={imgSrc}
              alt={title}
              width={636}
              height={400}
              sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1320px) calc(50vw - 24px), 636px"
            />
          </button>
        </div>
        <div className={`${styles["card_content"]} ${styles["px-16"]}`}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <ul className={`${styles["card_tags"]} ${styles["px-16"]}`}>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </article>
      <WorkModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        title={title}
        description={description}
      />
    </>
  );
}
