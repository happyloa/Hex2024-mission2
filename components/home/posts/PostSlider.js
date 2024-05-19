"use client";

import styles from "./PostSlider.module.css";

import Carousel from "./CarouselSetting/Carousel";

import PostCard from "@/components/ui/PostCard";

import posts from "@/lib/posts.json";

const OPTIONS = { align: "start", loop: true };

const PostSlider = () => {
  const SLIDES = posts.map((post, idx) => (
    <div className={styles.embla_slide} key={idx}>
      <PostCard post={post} />
    </div>
  ));

  return (
    <div className={styles.carousel_container}>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default PostSlider;
