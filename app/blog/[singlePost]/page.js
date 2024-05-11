import styles from "./SinglePostPage.module.css";

import SinglePost from "@/components/blog/Posts/SinglePost";
import BlogMobileNav from "@/components/blog/BlogMobileNav";
import BlogSideBar from "@/components/blog/BlogSideBar";

export default function SinglePostPage() {
  return (
    <>
      <BlogMobileNav />
      <section className={styles.container}>
        <article>
          <SinglePost />
        </article>
        <BlogSideBar />
      </section>
    </>
  );
}
