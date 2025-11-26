import Image from "next/image";
import type { Metadata } from "next";
import SelfPort from "@/app/gallery/portrait";
// import PdfViewer from "./pdfViever/pdfViewer";

export const metadata: Metadata = {
  title: "Home — Developer Portfolio",
  description:
    "Portfolio built with Next.js and Tailwind CSS. Redux-powered dark mode via Providers.tsx and global audio via MusicPlayer.tsx.",
};

export default function Home() {
  return (
    <div id="about">
      <div className="hero">
        <h1>DEVELOPER</h1>
        <p className="title">Web & Mobile Specialist</p>
        <div className="social-links">
          <a href="https://github.com/satiarahman" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
              <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.287-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.624-5.476 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.217.699.825.58C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/satia-rahman/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
              <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.83v2.18h.05c.53-1 1.82-2.06 3.75-2.06C19.9 8.12 22 10 22 13.66V24h-4v-8.4c0-2-.03-4.6-2.8-4.6-2.8 0-3.23 2.18-3.23 4.44V24H8V8z"/>
            </svg>
          </a>
          <a href="mailto:satiarahman44@gmail.com" title="Email" aria-label="Email">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden>
              <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 3.2l-8 5-8-5V6l8 5 8-5v1.2z"/>
            </svg>
          </a>
        </div>
        <div className="portrait">
          <div className="portrait-frame">
            <Image src={SelfPort} alt="Portrait" priority sizes="(max-width: 768px) 160px, 200px" className="portrait-img" />
          </div>
        </div>
        {/* <PdfViewer fileUrl="/Satia_Rahman_CV_ATS 2.pdf" /> */}
        <a href="#" className="cta-button">DOWNLOAD CV</a>
      </div>
      <div className="content-section">
        <h2>About Me</h2>
        <p>
          I&apos;m a passionate developer specializing in creating elegant solutions for web and mobile platforms.
          With a keen eye for design and a commitment to clean code, I transform ideas into functional,
          beautiful digital experiences.
        </p>
        <p>
          My approach combines technical expertise with creative problem-solving, ensuring every project
          not only meets requirements but exceeds expectations.
        </p>
        <p>This page is built with Next.js and Tailwind CSS; Redux handles dark mode via Providers.tsx</p>
        <div className="skills">
          <div className="skill-box"><span className="skill-label">React.js</span></div>
          <div className="skill-box"><span className="skill-label">React Native</span></div>
          <div className="skill-box"><span className="skill-label">Next.js</span></div>
          <div className="skill-box"><span className="skill-label">Agentic Coding (Cursor, Claude)</span></div>
          <div className="skill-box"><span className="skill-label">Node.js</span></div>
          <div className="skill-box"><span className="skill-label">Redux</span></div>
          <div className="skill-box"><span className="skill-label">JavaScript</span></div>
          <div className="skill-box"><span className="skill-label">TypeScript</span></div>
          <div className="skill-box"><span className="skill-label">Tailwind CSS</span></div>
        </div>
      </div>
    </div>
  );
}
