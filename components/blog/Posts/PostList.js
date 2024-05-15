import styles from "./PostList.module.css";

import Link from "next/link";

import posts from "@/lib/posts.json";

export default function PostList({ activeCategory }) {
  const filteredPosts =
    activeCategory === "全部文章"
      ? posts
      : posts.filter((post) =>
          post.postMeta.categories.includes(activeCategory)
        );

  return (
    <>
      {filteredPosts.map((post, idx) => (
        <Link href={"/blog" + post.postLink} key={idx}>
          <article className={styles.post_list}>
            <div className={styles.img_wrapper}>
              <img src={post.postMeta.postThumb} alt={post.postMeta.title} />
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
              <h3>{post.postMeta.title}</h3>
              <p>{post.postMeta.summary}</p>
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}
