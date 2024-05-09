"use client";

import { useState } from "react";

import styles from "./WorkCard.module.css";

import WorkModal from "./WorkModal";

export default function WorkCard({
  imgSrc = `/image/work/work-image1.webp`,
  title = "請輸入作品標題",
  description = "請輸入作品描述",
  tags = ["作品標籤"],
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <article className={styles.card} onClick={toggleModal}>
        <div className={styles.img_wrapper}>
          <img src={imgSrc} alt={title} />
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
