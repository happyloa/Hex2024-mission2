"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";

import styles from "./SinglePost.module.css";

import posts from "@/lib/posts.json";

export default function SinglePost() {
  const pathname = usePathname();
  const singlePost = pathname.split("/").pop();
  const post = posts.find((post) => post.postLink === `/${singlePost}`);

  // 如果找不到文章就顯示錯誤訊息
  if (!post) {
    return <p>沒有該篇文章</p>;
  }

  // 單篇文章內容
  return (
    <>
      <section className={styles.meta_wrapper}>
        <div className={styles.breadcrumb}>
          <span>{post.postMeta.categories.join(", ")}</span>
          <time>{post.postMeta.date + "發佈"}</time>
        </div>
        <hgroup>
          <h1>{post.postMeta.title}</h1>
          <h2 className={styles.subtitle}>- 探索虛擬實境技術的現狀與前景 -</h2>
        </hgroup>
      </section>
      <section className={styles.content_wrapper}>
        <p>{post.postMeta.summary}</p>
        {/* 使用 map 方法來遍歷 postContent 裡的每個元素 */}
        {post.postContent.map((content, idx) => (
          <Fragment key={idx}>
            <div>
              <h2>{content.title}</h2>
              <p>{content.content}</p>
            </div>
            {/* 在第二個內容後插入所有圖片 */}
            {idx === 1 && post.postImages && (
              <div className={styles.images_wrapper}>
                {post.postImages.map((image, imgIdx) => (
                  <figure key={imgIdx}>
                    <img src={image.url} alt={image.caption} />
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </Fragment>
        ))}
        <span className={styles.author}>Noel 主筆</span>
      </section>
    </>
  );
}
