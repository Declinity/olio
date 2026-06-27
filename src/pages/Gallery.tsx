import { useState } from 'react';
import './Gallery.css';
import hero from '../assets/hero.png';
import valleditria from '../assets/valleditria.jpg';
import frutto from '../assets/frutto.jpg';
import olio1 from '../assets/olio1.jpg';
import olio2 from '../assets/olio2.jpg';

const images = [
  { src: valleditria, caption: 'La Valle Argentina' },
  { src: frutto, caption: 'Il frutto dell\'olivo' },
  { src: hero, caption: 'La nostra linea di prodotti' },
  { src: olio1, caption: 'Monocultivar Taggiasca' },
  { src: olio2, caption: 'Mosto 5L' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="gallery-page">
      {/* Intro */}
      <section className="gallery-intro">
        <div className="gallery-decoration">~ • ~</div>
        <h1 className="gallery-title">
          <span className="title-dash">—</span> Galleria <span className="title-dash">—</span>
        </h1>
        <p className="gallery-subtitle">
          Queste sono le nostre immagini: dai paesaggi della Valle Argentina ai frutti dei nostri
          ulivi, fino ai prodotti che nascono dalla nostra passione. Sfoglia la galleria e lasciati
          raccontare la storia di Roi.
        </p>
      </section>

      {/* Main viewer */}
      <section className="gallery-viewer">
        <div className="gallery-main-image">
          <img src={active.src} alt={active.caption} key={active.src} />
        </div>
        <p className="gallery-caption">{active.caption}</p>
      </section>

      {/* Thumbnails */}
      <section className="gallery-thumbs">
        {images.map((image, index) => (
          <button
            key={image.src}
            className={`gallery-thumb ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Mostra ${image.caption}`}
          >
            <img src={image.src} alt={image.caption} />
          </button>
        ))}
      </section>
    </div>
  );
}
