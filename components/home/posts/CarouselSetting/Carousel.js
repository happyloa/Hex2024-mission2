import { useCallback } from "react";
import { DotButton, useDotButton } from "./CarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.css";

const Carousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <ul className={styles.embla__container}>
          {slides.map((slide, index) => (
            <li className={styles.embla__slide} key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`${styles["embla__dot"]} ${
                index === selectedIndex ? styles["embla__dot--selected"] : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
