"use client";

import { createContext, useState, useContext } from "react";

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [activeCategory, setActiveCategory] = useState("全部文章");

  const handleCategoryChange = (category) => {
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
