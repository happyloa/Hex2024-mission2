"use client";

import styles from "./PostSlider.module.css";

import { useRef } from "react";
import { register } from "swiper/element/bundle";

register();

import PostSliderCard from "@/components/ui/PostSliderCard";

import posts from "@/lib/posts.json";

import swiperConfig from "@/swiperConfig";

export default function PostSlider() {
  const swiperElRef = useRef(null);

  return (
    <>
      <swiper-container ref={swiperElRef} {...swiperConfig}>
        {posts.map((post, idx) => (
          <PostSliderCard post={post} key={idx} />
        ))}
      </swiper-container>
    </>
  );
}
