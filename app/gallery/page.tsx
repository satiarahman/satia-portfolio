import Image from "next/image";
import { galleryBjs } from "./bjs";
import { galleryViome } from "./viome";
import { galleryPhtn } from "./phtnAi";
export default function GalleryPage() {
  // Duplicate enough times to ensure seamless infinite scroll (track width > 200%)
  const repeatedBJS = new Array(6).fill(0).flatMap(() => galleryBjs);
  const repeatedViome = new Array(6).fill(0).flatMap(() => galleryViome);
  const repeatedPhtn = new Array(6).fill(0).flatMap(() => galleryPhtn);
  return (
    <div id="gallery">
      <div className="content-section">
        <h2>Project Experiences</h2>

        <p>PHTN.AI</p>
        <div className="carousel" aria-label="Personal photos carousel">
          <div className="carousel-viewport">
            <div className="carousel-track">
              {repeatedPhtn.map((src, idx) => (
                <div key={idx} className="carousel-slide">
                  <Image
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="carousel-img"
                    sizes="(max-width: 768px) 20vw, 10vw"
                    priority={idx < 2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p>Viome</p>
        <div className="carousel" aria-label="Personal photos carousel">
          <div className="carousel-viewport">
            <div className="carousel-track">
              {repeatedViome.map((src, idx) => (
                <div key={idx} className="carousel-slide">
                  <Image
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="carousel-img"
                    sizes="(max-width: 768px) 20vw, 10vw"
                    priority={idx < 2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p>BJ's</p>
        <div className="carousel" aria-label="Personal photos carousel">
          <div className="carousel-viewport">
            <div className="carousel-track">
              {repeatedBJS.map((src, idx) => (
                <div key={idx} className="carousel-slide">
                  <Image
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="carousel-img"
                    sizes="(max-width: 768px) 60vw, 30vw"
                    priority={idx < 2}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


