import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = "light" | "dark";

export interface ThemeState {
  mode: ThemeMode;
}

const getInitial = (): ThemeMode => {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem("theme");
  return (saved as ThemeMode) || "light";
};

const initialState: ThemeState = { mode: getInitial() };

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", state.mode);
        document.documentElement.setAttribute("data-theme", state.mode);
      }
    },
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", state.mode);
        document.documentElement.setAttribute("data-theme", state.mode);
      }
    },
    hydrateTheme(state) {
      state.mode = getInitial();
      if (typeof window !== "undefined") {
        document.documentElement.setAttribute("data-theme", state.mode);
      }
    },
  },
});

export const { setTheme, toggleTheme, hydrateTheme } = themeSlice.actions;
export default themeSlice.reducer;






