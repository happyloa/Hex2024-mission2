"use client";

import { useRouter } from "next/navigation";

import { useCategory } from "@/components/blog/CategoryContext";
import BlogMobileNav from "@/components/blog/BlogMobileNav";
import BlogSideBar from "@/components/blog/BlogSideBar";
import RelatedPosts from "@/components/blog/Posts/RelatedPosts";
import SinglePost from "@/components/blog/Posts/SinglePost";

import styles from "@/app/blog/[singlePost]/SinglePostPage.module.css";

export default function SinglePostPageContent({ post }) {
  const { activeCategory, handleCategoryChange } = useCategory();
  const router = useRouter();

  const handleCategoryClick = (category) => {
    handleCategoryChange(category);
    router.push("/blog", undefined, { shallow: true });
  };

  return (
    <>
      <BlogMobileNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryClick}
      />
      <section className={styles.container}>
        <article>
          <SinglePost post={post} />
        </article>
        <BlogSideBar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryClick}
        />
      </section>
      <RelatedPosts />
    </>
  );
}
