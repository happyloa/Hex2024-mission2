import styles from "./SinglePostPage.module.css";

import SinglePost from "@/components/blog/Posts/SinglePost";
import BlogMobileNav from "@/components/blog/BlogMobileNav";
import BlogSideBar from "@/components/blog/BlogSideBar";
import RelatedPosts from "@/components/blog/Posts/RelatedPosts";
import posts from "@/lib/posts.json";

export async function generateMetadata({ params }) {
  const { singlePost } = await params;
  const post = posts.find((p) => p.postSlug === `/${singlePost}`);
  if (!post) {
    return {
      title: "文章不存在",
      description: "沒有該篇文章內容",
    };
  }
  return {
    title: post.postMeta.title,
    description: post.postMeta.summary,
  };
}

export default async function SinglePostPage({ params }) {
  const { singlePost } = await params;
  const post = posts.find((p) => p.postSlug === `/${singlePost}`);

  return (
    <>
      <BlogMobileNav />
      <section className={styles.container}>
        <article>
          <SinglePost post={post} />
        </article>
        <BlogSideBar />
      </section>
      <RelatedPosts />
    </>
  );
}
