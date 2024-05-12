"use client";

import styles from "./PostSlider.module.css";

import { useRef } from "react";
import { register } from "swiper/element/bundle";
import swiperConfig from "@/swiperConfig";

register();

import PostSliderCard from "@/components/ui/PostSliderCard";

export default function PostSlider() {
  const swiperElRef = useRef(null);

  return (
    <>
      <swiper-container ref={swiperElRef} {...swiperConfig}>
        <PostSliderCard />
      </swiper-container>
    </>
  );
}
