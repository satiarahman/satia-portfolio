"use client";

import { useEffect, useRef, useState } from "react";

type Props = { src?: string; title?: string; artist?: string };

export default function MusicPlayer({
  src = "https://www.bensound.com/bensound-music/bensound-entenca.mp3",
  title = "Entenca",
  artist = "Ben Sound",
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audioRef.current = audio;
    const onCanPlay = () => setReady(true);
    audio.addEventListener("canplay", onCanPlay);
    return () => {
      audio.pause();
      audio.removeEventListener("canplay", onCanPlay);
      audioRef.current = null;
    };
  }, [src]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // ignore autoplay block
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-player" aria-live="polite">
      <div className={`music-panel ${isPlaying ? "open" : ""}`}>
        <div className={`music-bars ${isPlaying ? "playing" : ""}`} aria-hidden>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
        <div className="music-meta">
          <div className="music-title">{title}</div>
          <div className="music-artist">{artist}</div>
        </div>
      </div>
      <button
        className="music-fab"
        onClick={toggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause" : "Play"}
        disabled={!ready}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <rect x="6" y="4" width="4" height="16" fill="currentColor" />
            <rect x="14" y="4" width="4" height="16" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
            <polygon points="8,5 19,12 8,19" fill="currentColor" />
          </svg>
        )}
      </button>
    </div>
  );
}


