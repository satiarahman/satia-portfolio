"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { useEffect } from "react";
import { hydrateTheme } from "@/store/themeSlice";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    store.dispatch(hydrateTheme());
  }, []);
  return <Provider store={store}>{children}</Provider>;
}






