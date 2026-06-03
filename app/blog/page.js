import BlogHeading from "@/components/blog/BlogHeading";
import BlogMobileNav from "@/components/blog/BlogMobileNav";
import BlogPosts from "@/components/blog/BlogPost";

export const metadata = {
  title: "部落格",
  description: "分享前端開發、UI/UX 與數位產品設計的最新觀點與技術文章。",
};

export default async function Blog({ searchParams }) {
  const params = await searchParams;
  const activeCategory = params.category || "全部文章";

  return (
    <>
      <BlogHeading />
      <BlogMobileNav activeCategory={activeCategory} />
      <BlogPosts activeCategory={activeCategory} />
    </>
  );
}
