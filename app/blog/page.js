"use client";

import { useState, Suspense } from "react";

import BlogHeading from "@/components/blog/BlogHeading";
import BlogMobileNav from "@/components/blog/BlogMobileNav";
import BlogPosts from "@/components/blog/BlogPost";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("全部文章");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <Suspense>
      <BlogHeading />
      <BlogMobileNav
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <BlogPosts
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
    </Suspense>
  );
}
