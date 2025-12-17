"use client";

import { useRouter } from "next/navigation";
import { useCategory } from "@/components/blog/CategoryContext";

import styles from "./SinglePostPage.module.css";

import SinglePost from "@/components/blog/Posts/SinglePost";
import BlogMobileNav from "@/components/blog/BlogMobileNav";
import BlogSideBar from "@/components/blog/BlogSideBar";
import RelatedPosts from "@/components/blog/Posts/RelatedPosts";

export default function SinglePostPage() {
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
          <SinglePost />
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
