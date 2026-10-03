import styles from "./PostList.module.css";

import Link from "next/link";
import Image from "next/image";

import posts from "@/lib/posts.json";

export default function PostList({ activeCategory }) {
  const filteredPosts =
    activeCategory === "全部文章"
      ? posts
      : posts.filter((post) =>
          post.postMeta.categories.includes(activeCategory)
        );

  return (
    <ul className={styles.post_list_wrapper}>
      {filteredPosts.map((post, idx) => (
        <li key={post.postSlug}>
          <Link href={"/blog" + post.postSlug}>
            <article className={styles.post_list_card}>
              <div className={styles.img_wrapper}>
                <Image
                  src={post.postMeta.postThumb}
                  alt={post.postMeta.title}
                  width={416}
                  height={234}
                  sizes="(max-width: 768px) calc(100vw - 69px), (max-width: 1200px) 60vw, 306px"
                  loading={idx === 0 ? "eager" : "lazy"}
                  fetchPriority={idx === 0 ? "high" : "auto"}
                />
              </div>
              <div className={styles.content_wrapper}>
                <div className={styles.time_and_category}>
                  <time>{post.postMeta.date}</time>
                  <ul>
                    {post.postMeta.categories.map((category, catIdx) => (
                      <li key={catIdx}>{category}</li>
                    ))}
                  </ul>
                </div>
                <h2>{post.postMeta.title}</h2>
                <p>{post.postMeta.summary}</p>
              </div>
            </article>
          </Link>
        </li>
      ))}
    </ul>
  );
}
