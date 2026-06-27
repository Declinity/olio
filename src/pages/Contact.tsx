import './Contact.css';

// Badalucco (IM), Italy — used to centre the free OpenStreetMap embed (no API key needed).
const LAT = 43.9181;
const LON = 7.8456;
const bbox = [LON - 0.012, LAT - 0.006, LON + 0.012, LAT + 0.006].join(',');
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT},${LON}`;
const mapLink = `https://www.openstreetmap.org/?mlat=${LAT}&mlon=${LON}#map=16/${LAT}/${LON}`;

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-intro">
        <div className="contact-decoration">~ • ~</div>
        <h1 className="contact-title">
          <span className="title-dash">—</span> Contatti <span className="title-dash">—</span>
        </h1>
        <p className="contact-subtitle">
          Vieni a trovarci o scrivici: saremo felici di accoglierti e raccontarti la nostra storia.
        </p>
      </section>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-block">
            <h2 className="contact-block-title">Indirizzo</h2>
            <address className="contact-address">
              Via Argentina Sud 1<br />
              18010 Badalucco (IM)<br />
              Italia
            </address>
          </div>

          <div className="contact-block">
            <h2 className="contact-block-title">Contatti</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-label">Tel.</span>
                <a href="tel:+390184408004">+39 0184 408004</a>
              </li>
              <li>
                <span className="contact-label">WhatsApp.</span>
                <a href="https://wa.me/393471933553" target="_blank" rel="noopener noreferrer">
                  +39 3471933553
                </a>
              </li>
              <li>
                <span className="contact-label">Email</span>
                <a href="mailto:info@olioroi.com">info@olioroi.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Mappa - Via Argentina Sud 1, Badalucco (IM)"
            src={mapSrc}
            loading="lazy"
          />
          <a className="contact-map-link" href={mapLink} target="_blank" rel="noopener noreferrer">
            Visualizza mappa più grande
          </a>
        </div>
      </div>
    </div>
  );
}
