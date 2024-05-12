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
    <div className={styles.swiper_container}>
      <swiper-container ref={swiperElRef} {...swiperConfig}>
        {posts.map((post, idx) => (
          <swiper-slide key={idx}>
            <PostSliderCard post={post} />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
