"use client";

import { createContext, useState, useContext } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  // 以 Context 保存目前的文章分類，方便多個元件共用狀態
  const [activeCategory, setActiveCategory] = useState("全部文章");

  const handleCategoryChange = (category) => {
    // 切換分類時，同步更新 Context 中的值
    setActiveCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ activeCategory, handleCategoryChange }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  return useContext(CategoryContext);
}
