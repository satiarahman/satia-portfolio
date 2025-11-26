"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { toggleTheme, setTheme } from "@/store/themeSlice";

export default function ThemeToggles() {
  const theme = useSelector((s: RootState) => s.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const stored = window.localStorage.getItem("theme") as "light" | "dark" | null;
    if (stored) {
      dispatch(setTheme(stored));
    }
  }, [dispatch]);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return (
    
<button
  className="theme-toggle"
  onClick={toggle}
  aria-label="Toggle theme"
  aria-pressed={theme === "dark"}
  title={theme === "dark" ? "Dark mode" : "Light mode"}
>
  <span className="switch-thumb" aria-hidden />

  <svg className="icon moon" viewBox="0 0 24 24" width="20" height="20" aria-hidden>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>

  <svg
    className="icon sun"
    id="sunIcon"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="20"
    height="20"
    strokeWidth="2"
    fill="none"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
</button>

  );
}


