"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useRef, useCallback } from "react";
import { galleryBjs } from "./bjs";
import { galleryViome } from "./viome";
import { galleryPhtn } from "./phtnAi";

type CarouselProps = {
  images: StaticImageData[];
  label: string;
  sizes: string;
};

const VISIBLE = 3;

function Carousel({ images, label, sizes }: CarouselProps) {
  // Clone VISIBLE slides at each end for seamless looping
  const clonesBefore = images.slice(-VISIBLE);
  const clonesAfter = images.slice(0, VISIBLE);
  const track = [...clonesBefore, ...images, ...clonesAfter];

  // Start at the first real image (after the clones-before)
  const [index, setIndex] = useState(VISIBLE);
  const [transitioning, setTransitioning] = useState(true);
  const isAnimating = useRef(false);

  const slidePercent = 100 / VISIBLE;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating.current) return;
      isAnimating.current = true;
      setTransitioning(true);
      setIndex((i) => i + dir);
    },
    []
  );

  // After the CSS transition ends, silently jump if we're on a clone
  const handleTransitionEnd = useCallback(() => {
    isAnimating.current = false;
    setIndex((i) => {
      const realCount = images.length;
      // Jumped past the end clones → jump to real start
      if (i >= VISIBLE + realCount) {
        setTransitioning(false);
        return VISIBLE;
      }
      // Jumped before the start clones → jump to real end
      if (i < VISIBLE) {
        setTransitioning(false);
        return VISIBLE + realCount - 1;
      }
      return i;
    });
  }, [images.length]);

  return (
    <div className="carousel-manual" aria-label={label}>
      <button
        className="carousel-btn carousel-btn--prev"
        onClick={() => go(-1)}
        aria-label="Previous image"
      >
        ‹
      </button>

      <div className="carousel-manual-viewport">
        <div
          className="carousel-manual-track"
          style={{
            transform: `translateX(-${index * slidePercent}%)`,
            transition: transitioning ? "transform 320ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {track.map((src, idx) => (
            <div key={idx} className="carousel-manual-slide">
              <Image
                src={src}
                alt={`${label} image ${(idx % images.length) + 1}`}
                className="carousel-img"
                sizes={sizes}
                priority={idx < VISIBLE * 2}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-btn carousel-btn--next"
        onClick={() => go(1)}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div id="gallery">
      <div className="content-section">
        <h2>Project Experiences</h2>

        <p>PHTN.AI</p>
        <Carousel
          images={galleryPhtn}
          label="PHTN.AI photos"
          sizes="(max-width: 768px) 33vw, 33vw"
        />

        <p>Viome</p>
        <Carousel
          images={galleryViome}
          label="Viome photos"
          sizes="(max-width: 768px) 33vw, 33vw"
        />

        <p>BJ&apos;s</p>
        <Carousel
          images={galleryBjs}
          label="BJ's photos"
          sizes="(max-width: 768px) 33vw, 33vw"
        />
      </div>
    </div>
  );
}
