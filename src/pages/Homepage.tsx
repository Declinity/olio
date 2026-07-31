import './Homepage.css';
import olio1 from '../assets/olio1.jpg';
import olio2 from '../assets/olio2.jpg';
import olio3 from '../assets/storia.png';
import { useLang } from '../i18n/LanguageContext';

const productImages = [olio1, olio2];

export default function Homepage() {
  const { t } = useLang();
  const h = t.home;

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{h.heroTitle}</h1>
          <p>{h.heroSubtitle}</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="prodotti">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-dash">—</span> {h.storyTitle} <span className="title-dash">—</span>
          </h2>
        </div>

        <div className="products-layout">
          {/* Left Column */}
          <div className="features-column">
            <div className="feature-item">
              <h3 className="feature-title">{h.features[0].title}</h3>
              <p className="feature-text">{h.features[0].text}</p>
              <div className="feature-dash"></div>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">{h.features[1].title}</h3>
              <p className="feature-text">{h.features[1].text}</p>
            </div>
          </div>

          {/* Center Column (Image) */}
          <div className="image-column">
            <img src={olio3} alt={h.storyTitle} className="illustration-image" />
          </div>

          {/* Right Column */}
          <div className="features-column">
            <div className="feature-item">
              <h3 className="feature-title">{h.features[2].title}</h3>
              <p className="feature-text">{h.features[2].text}</p>
              <div className="feature-dash"></div>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">{h.features[3].title}</h3>
              <p className="feature-text">{h.features[3].text}</p>
            </div>
          </div>
        </div>

        <div className="section-footer">
          <div className="dotted-line"></div>
          <div className="scroll-indicator">
            <span className="arrow-down">↓</span>
          </div>
        </div>
      </section>

      {/* Non solo Olio Section */}
      <section className="non-solo-olio-section">
        <div className="v-shape-top"></div>

        <div className="nso-content">
          <div className="nso-decoration">~ • ~</div>
          <h2 className="section-title">
            <span className="title-dash">—</span> {h.featuredTitle} <span className="title-dash">—</span>
          </h2>

          <div className="featured-products-container">
            {/* Product 1 */}
            <div className="featured-product">
              <div className="product-image-container">
                <img src={productImages[0]} alt={h.products[0].name} className="product-img bottle-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{h.products[0].name}</h3>
                <p className="product-subtitle">{h.products[0].subtitle}</p>
                <p className="product-desc">{h.products[0].desc}</p>
                <button className="store-btn">{h.storeBtn}</button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="featured-product">
              <div className="product-image-container">
                <img src={productImages[1]} alt={h.products[1].name} className="product-img tin-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{h.products[1].name}</h3>
                <p className="product-subtitle">{h.products[1].subtitle}</p>
                <p className="product-desc">{h.products[1].desc}</p>
                <button className="store-btn">{h.storeBtn}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping CTA Section */}
      <section className="shopping-cta-section">
        <div className="shopping-cta-content">
          <h2 className="shopping-cta-title">{h.ctaTitleLine1}<br />{h.ctaTitleLine2}</h2>
          <div className="shopping-cta-info">
            <p className="shopping-cta-text">{h.ctaText}</p>
            <div className="shopping-cta-buttons">
              <button className="cta-btn">{h.ctaStoreBtn}</button>
              <button className="cta-btn">{h.ctaContactBtn}</button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Why choose us Section */}
      <section className="succede-section" id="succede">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-dash">—</span> {h.whyTitle} <span className="title-dash">—</span>
          </h2>
        </div>

        <div className="succede-grid">
          {h.cards.map((card) => (
            <div className="succede-card" key={card.title}>
              <h3 className="succede-title">{card.title}</h3>
              <p className="succede-text">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
