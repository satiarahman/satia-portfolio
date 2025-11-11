import Image from "next/image";
import { galleryImages } from "./images";

export default function GalleryPage() {
  // Duplicate enough times to ensure seamless infinite scroll (track width > 200%)
  const repeated = new Array(6).fill(0).flatMap(() => galleryImages);
  return (
    <div id="gallery">
      <div className="content-section">
        <h2>Personal</h2>

        <p>Pictures of Me Spending My Weekend Time Enjoying Nature</p>
        <div className="carousel" aria-label="Personal photos carousel">
          <div className="carousel-viewport">
            <div className="carousel-track">
              {repeated.map((src, idx) => (
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


