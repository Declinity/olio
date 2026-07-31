import './Products.css';
import olio1 from '../assets/olio1.jpg';
import olio2 from '../assets/olio2.jpg';
import { useLang } from '../i18n/LanguageContext';

// Language-independent product data (image + price), index-aligned with
// translations.products.items.
const productMeta = [
  { image: olio1, price: '13,50€' },
  { image: olio1, price: '25,00€' },
  { image: olio2, price: '68,00€' },
  { image: olio1, price: '15,00€' },
  { image: olio1, price: '27,50€' },
  { image: olio2, price: '95,00€' },
  { image: olio1, price: '18,00€' },
  { image: olio1, price: '11,00€' },
  { image: olio2, price: '8,50€' },
];

export default function Products() {
  const { t } = useLang();
  const p = t.products;

  return (
    <div className="products-page">
      {/* Hero + order banner together fill the viewport on desktop */}
      <div className="bottega-top">
        {/* Hero */}
        <section className="bottega-hero">
          <div className="bottega-hero-content">
            <h1 className="bottega-hero-title">{p.heroTitle}</h1>
            <p className="bottega-hero-text">{p.heroText}</p>
          </div>
        </section>

        {/* Order banner */}
        <section className="order-banner">
          <div className="order-banner-content">
            <h2 className="order-banner-title">{p.orderTitle}</h2>
            <div className="order-banner-info">
              <p className="order-banner-text">
                {p.orderTextBefore}
                <strong> +39 347 193 3553</strong>
                {p.orderTextAfter}
              </p>
              <a
                className="order-banner-btn"
                href="https://wa.me/393471933553"
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.orderBtn}
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Shop layout */}
      <div className="shop-layout">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <div className="sidebar-group">
            <h3 className="sidebar-heading">{p.categoryTitle}</h3>
            <ul className="sidebar-list">
              {p.categoryItems.map((item) => (
                <li key={item} className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <span className="sidebar-arrow">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="shop-main">
          <div className="shop-toolbar">
            <span className="results-count">{p.results}</span>
            <select className="sort-select" defaultValue="default">
              <option value="default">{p.sortDefault}</option>
              <option value="popularity">{p.sortPopularity}</option>
              <option value="price-asc">{p.sortPriceAsc}</option>
              <option value="price-desc">{p.sortPriceDesc}</option>
            </select>
          </div>

          <div className="product-grid">
            {p.items.map((product, i) => (
              <article className="product-card" key={product.name}>
                <div className="product-card-image">
                  <img src={productMeta[i].image} alt={product.name} />
                </div>
                <h2 className="product-card-name">{product.name}</h2>
                <p className="product-card-desc">{product.desc}</p>
                <p className="product-card-price">{productMeta[i].price}</p>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
