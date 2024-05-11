import styles from "./SinglePostPage.module.css";

import SinglePost from "@/components/blog/Posts/SinglePost";
import BlogSideBar from "@/components/blog/BlogSideBar";

export default function SinglePostPage() {
  return (
    <section className={styles.container}>
      <article>
        <SinglePost />
      </article>
      <BlogSideBar />
    </section>
  );
}
