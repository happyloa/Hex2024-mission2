import styles from "./PostSliderCard.module.css";

import Link from "next/link";

import posts from "@/lib/posts.json";

export default function PostSliderCard() {
  return (
    <>
      {posts.map((post, idx) => (
        <swiper-slide key={idx} className={styles.card}>
          <Link href={"/blog" + post.postLink}>
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
        </swiper-slide>
      ))}
    </>
  );
}
