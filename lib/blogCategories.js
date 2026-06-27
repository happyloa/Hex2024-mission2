export const BLOG_CATEGORIES = [
  "全部文章",
  "UI/UX 新知",
  "數位產品設計",
  "平面設計",
  "前端開發",
];

export function getCategoryUrl(category) {
  if (category === "全部文章") return "/blog";
  return `/blog?category=${encodeURIComponent(category)}`;
}
