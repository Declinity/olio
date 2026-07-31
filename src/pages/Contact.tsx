import './Contact.css';
import { useLang } from '../i18n/LanguageContext';

// Badalucco (IM), Italy — used to centre the free OpenStreetMap embed (no API key needed).
const LAT = 40.743127;
const LON = 17.726062;
const bbox = [LON - 0.012, LAT - 0.006, LON + 0.012, LAT + 0.006].join(',');
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT},${LON}`;
const mapLink = `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LON}#map=16/${LAT}/${LON}`;

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <div className="contact-page">
      <section className="contact-intro">
        <div className="contact-decoration">~ • ~</div>
        <h1 className="contact-title">
          <span className="title-dash">—</span> {c.title} <span className="title-dash">—</span>
        </h1>
        <p className="contact-subtitle">{c.subtitle}</p>
      </section>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-block">
            <h2 className="contact-block-title">{c.addressTitle}</h2>
            <address className="contact-address">
              {c.addressLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < c.addressLines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>

          <div className="contact-block">
            <h2 className="contact-block-title">{c.contactsTitle}</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-label">{c.telLabel}</span>
                <a href="tel:+390184408004">+39 0184 408004</a>
              </li>
              <li>
                <span className="contact-label">{c.whatsappLabel}</span>
                <a href="https://wa.me/393471933553" target="_blank" rel="noopener noreferrer">
                  +39 3471933553
                </a>
              </li>
              <li>
                <span className="contact-label">{c.emailLabel}</span>
                <a href="mailto:info@olioroi.com">info@olioroi.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-map">
          <iframe title={c.mapTitle} src={mapSrc} loading="lazy" />
          <a className="contact-map-link" href={mapLink} target="_blank" rel="noopener noreferrer">
            {c.mapLink}
          </a>
        </div>
      </div>
    </div>
  );
}
