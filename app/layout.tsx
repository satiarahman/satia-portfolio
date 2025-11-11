import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";
import Pagination from "@/components/Pagination";
// import FloatingNavMenu from "@/components/Menu";
import MusicPlayer from "@/components/MusicPlayer";
import Providers from "@/components/Providers";

// Use system fonts defined in globals.css

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeToggle />
          <div className="pagination">
            <Pagination />
            {/* <FloatingNavMenu /> */}
          </div>
          <div className="container">{children}</div>
          <MusicPlayer />
        </Providers>
      </body>
    </html>
  );
}
