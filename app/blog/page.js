"use client";

import { useCategory } from "@/components/blog/CategoryContext";

import BlogHeading from "@/components/blog/BlogHeading";
import BlogMobileNav from "@/components/blog/BlogMobileNav";
import BlogPosts from "@/components/blog/BlogPost";

export default function Blog() {
  const { activeCategory, handleCategoryChange } = useCategory();

  return (
    <>
      <BlogHeading />
      <BlogMobileNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <BlogPosts
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
    </>
  );
}
