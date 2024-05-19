"use client";

import styles from "./PostSlider.module.css";

import Carousel from "./CarouselSetting/Carousel";

import PostCard from "@/components/ui/PostCard";

import posts from "@/lib/posts.json";

const OPTIONS = { align: "start", loop: true };

const PostSlider = () => {
  const SLIDES = posts.map((post, idx) => <PostCard post={post} key={idx} />);

  return (
    <section className={styles.carousel_container}>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default PostSlider;
