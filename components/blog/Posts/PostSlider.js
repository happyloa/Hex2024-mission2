"use client";

import styles from "./PostSlider.module.css";

import Link from "next/link";
import { useRef } from "react";
import { register } from "swiper/element/bundle";

register();

import posts from "@/lib/posts.json";

export default function PostSlider() {
  const swiperElRef = useRef(null);

  return (
    <>
      <swiper-container
        ref={swiperElRef}
        autoplay="true"
        slidesPerView="3"
        loop="true"
        pagination="true">
        {posts.map((post, idx) => (
          <swiper-slide key={idx}>
            <Link href={"/blog" + post.postLink}>
              <article>
                <div className={styles.img_wrapper}>
                  <img
                    src={post.postMeta.postThumb}
                    alt={post.postMeta.title}
                  />
                </div>
                <div className={styles.content_wrapper}>
                  <h3>{post.postMeta.title}</h3>
                  <div className={styles.time_and_category}>
                    <ul>
                      {post.postMeta.categories.map((category, catIdx) => (
                        <li key={catIdx}>{category}</li>
                      ))}
                    </ul>
                    <time>{post.postMeta.date}</time>
                  </div>
                </div>
              </article>
            </Link>
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
}
