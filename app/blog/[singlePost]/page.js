import { notFound } from "next/navigation";

import SinglePostPageContent from "@/components/blog/SinglePostPageContent";
import posts from "@/lib/posts.json";

const siteTitle = "2024 體驗營切版任務二 by Aaron";

const normalizeSlug = (slug = "") =>
  decodeURIComponent(slug).replace(/^\/+/, "").replace(/\/+$/, "");

export function generateStaticParams() {
  return posts.map((post) => ({ singlePost: normalizeSlug(post.postSlug) }));
}

export function generateMetadata({ params }) {
  const slug = normalizeSlug(params.singlePost);
  const post = posts.find((item) => normalizeSlug(item.postSlug) === slug);

  if (!post) {
    return {
      title: `部落格 | ${siteTitle}`,
      description: "找不到指定的文章。",
    };
  }

  return {
    title: `${post.postMeta.title} | ${siteTitle}`,
    description: post.postMeta.summary,
    openGraph: {
      title: `${post.postMeta.title} | ${siteTitle}`,
      description: post.postMeta.summary,
      url: `https://hex2024.worksbyaaron.com/blog/${params.singlePost}`,
      siteName: siteTitle,
      locale: "zh_TW",
      type: "article",
    },
    twitter: {
      title: `${post.postMeta.title} | ${siteTitle}`,
      description: post.postMeta.summary,
      card: "summary_large_image",
    },
  };
}

export default function SinglePostPage({ params }) {
  const slug = normalizeSlug(params.singlePost);
  const post = posts.find((item) => normalizeSlug(item.postSlug) === slug);

  if (!post) {
    notFound();
  }

  return <SinglePostPageContent post={post} />;
}
