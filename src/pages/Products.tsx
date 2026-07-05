import './Products.css';
import heroLineup from '../assets/logo.jpg';
import olio1 from '../assets/olio1.jpg';
import olio2 from '../assets/olio2.jpg';

const categories = [
  {
    title: 'OLIO',
    items: ['Olio di oliva', 'Oli DOP', 'Olio Extravergine', 'Oli Aromatizzati'],
  },
  {
    title: 'OLIVE',
    items: ['Olive Taggiasche IGP', 'Olive Taggiasche'],
  },
  {
    title: 'DELIZIE',
    items: ['Dispensa', 'Salse', "Sott'Olio", 'Erbe Aromatiche', 'Tisane'],
  },
];

const products = [
  {
    name: 'Cultivar Ogliarola-Taggiasca 500ml',
    desc: 'Olio extravergine di oliva 100% Italiano "Cultivar Ogliarola-Taggiasca" 500ml',
    price: '13,50€',
    image: olio1,
  },
  {
    name: 'Cultivar Ogliarola-Taggiasca 1L',
    desc: 'Olio extravergine di oliva 100% Italiano "Cultivar Ogliarola-Taggiasca" 1L',
    price: '25,00€',
    image: olio1,
  },
  {
    name: 'Cultivar Ogliarola-Taggiasca 3L',
    desc: 'Olio extravergine di oliva 100% Italiano "Cultivar Ogliarola-Taggiasca" 3L',
    price: '68,00€',
    image: olio2,
  },
  {
    name: 'Monocultivar Taggiasca 500ml',
    desc: 'Olio extravergine di oliva 100% Italiano "Monocultivar Taggiasca" 500ml',
    price: '15,00€',
    image: olio1,
  },
  {
    name: 'Monocultivar Taggiasca 1L',
    desc: 'Olio extravergine di oliva 100% Italiano "Monocultivar Taggiasca" 1L',
    price: '27,50€',
    image: olio1,
  },
  {
    name: 'Mosto 5L',
    desc: 'Olio extravergine di oliva 100% Italiano "Mosto" latta da 5L',
    price: '95,00€',
    image: olio2,
  },
  {
    name: 'Oli DOP Riviera Ligure 500ml',
    desc: 'Olio extravergine di oliva DOP Riviera Ligure 100% Italiano 500ml',
    price: '18,00€',
    image: olio1,
  },
  {
    name: 'Olio Aromatizzato al Limone',
    desc: 'Olio extravergine di oliva aromatizzato al limone 100% Italiano 250ml',
    price: '11,00€',
    image: olio1,
  },
  {
    name: 'Olive Taggiasche in Salamoia',
    desc: 'Olive Taggiasche IGP in salamoia 100% Italiane vasetto 180g',
    price: '8,50€',
    image: olio2,
  },
];

export default function Products() {
  return (
    <div className="products-page">
      {/* Banner */}
      <section className="bottega-banner">
        <div className="banner-image">
          <img src={heroLineup} alt="Olio Roi" />
        </div>
        <div className="banner-info">
          <h1 className="banner-title">Bottega Online</h1>
          <p className="banner-text">
            Ordinare online i prodotti Olio Roi è facile e veloce. Scegli i tuoi preferiti o
            acquista le novità direttamente dal tuo salotto, li riceverai a casa in pochissimo tempo.
          </p>
        </div>
      </section>

      {/* Order banner */}
      <section className="order-banner">
        <div className="order-banner-content">
          <h2 className="order-banner-title">Come ordinare</h2>
          <div className="order-banner-info">
            <p className="order-banner-text">
              Per effettuare un ordine, scrivici un messaggio su WhatsApp al numero
              <strong> +39 347 193 3553</strong>. Indicaci i prodotti e le quantità che desideri:
              ti risponderemo il prima possibile per confermare disponibilità, prezzo e spedizione.
            </p>
            <a
              className="order-banner-btn"
              href="https://wa.me/393471933553"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCRIVICI SU WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Shop layout */}
      <div className="shop-layout">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          {categories.map((cat) => (
            <div className="sidebar-group" key={cat.title}>
              <h3 className="sidebar-heading">{cat.title}</h3>
              <ul className="sidebar-list">
                {cat.items.map((item) => (
                  <li key={item} className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <span className="sidebar-arrow">›</span> {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main className="shop-main">
          <div className="shop-toolbar">
            <span className="results-count">Visualizzazione di 1-21 di 133 risultati</span>
            <select className="sort-select" defaultValue="default">
              <option value="default">ORDINAMENTO PREDEFINITO</option>
              <option value="popularity">Popolarità</option>
              <option value="price-asc">Prezzo crescente</option>
              <option value="price-desc">Prezzo decrescente</option>
            </select>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <h2 className="product-card-name">{product.name}</h2>
                <p className="product-card-desc">{product.desc}</p>
                <p className="product-card-price">{product.price}</p>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
