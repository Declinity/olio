import { useState } from 'react';
import './Gallery.css';
import hero from '../assets/hero.png';
import valleditria from '../assets/valleditria.jpg';
import frutto from '../assets/frutto.jpg';
import olio1 from '../assets/olio1.jpg';
import olio2 from '../assets/olio2.jpg';
import { useLang } from '../i18n/LanguageContext';

// Index-aligned with translations.gallery.captions.
const imageSources = [valleditria, frutto, hero, olio1, olio2];

export default function Gallery() {
  const { t } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSrc = imageSources[activeIndex];
  const activeCaption = t.gallery.captions[activeIndex];

  return (
    <div className="gallery-page">
      {/* Intro */}
      <section className="gallery-intro">
        <div className="gallery-decoration">~ • ~</div>
        <h1 className="gallery-title">
          <span className="title-dash">—</span> {t.gallery.title} <span className="title-dash">—</span>
        </h1>
        <p className="gallery-subtitle">{t.gallery.subtitle}</p>
      </section>

      {/* Main viewer */}
      <section className="gallery-viewer">
        <div className="gallery-main-image">
          <img src={activeSrc} alt={activeCaption} key={activeSrc} />
        </div>
        <p className="gallery-caption">{activeCaption}</p>
      </section>

      {/* Thumbnails */}
      <section className="gallery-thumbs">
        {imageSources.map((src, index) => (
          <button
            key={src}
            className={`gallery-thumb ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`${t.gallery.showPrefix} ${t.gallery.captions[index]}`}
          >
            <img src={src} alt={t.gallery.captions[index]} />
          </button>
        ))}
      </section>
    </div>
  );
}
