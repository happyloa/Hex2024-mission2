"use client";

import { Suspense } from "react";

import BlogHeading from "@/components/blog/BlogHeading";
import BlogMobileNav from "@/components/blog/BlogMobileNav";
import BlogPosts from "@/components/blog/BlogPost";

export default function Blog() {
  return (
    <Suspense>
      <BlogHeading />
      <BlogMobileNav />
      <BlogPosts />
    </Suspense>
  );
}
