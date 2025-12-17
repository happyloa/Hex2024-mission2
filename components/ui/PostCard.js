import styles from "./PostCard.module.css";

import Link from "next/link";

export default function PostCard({ post }) {
  // 文章卡片：顯示封面、分類與發佈時間
  return (
    <Link href={"/blog" + post.postSlug} className={styles.card}>
      <article>
        <div className={styles.img_wrapper}>
          <img src={post.postMeta.postThumb} alt={post.postMeta.title} />
        </div>
        <div className={styles.content_wrapper}>
          <h3>{post.postMeta.title}</h3>
          <div className={styles.time_and_category}>
            <ul>
              {post.postMeta.categories.map((category, catIdx) => (
                <li key={catIdx}>{category}</li>
              ))}
            </ul>
            <time>{post.postMeta.date}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}
