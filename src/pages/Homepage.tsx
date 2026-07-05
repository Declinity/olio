import './Homepage.css';
import frutto from '../assets/frutto.jpg';
import olio1 from '../assets/olio1.jpg';
import olio2 from '../assets/olio2.jpg';

export default function Homepage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Terra di Pietre</h1>
          <p>Olio buonissimoooo di ottima qualita</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="prodotti">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-dash">—</span> La Nostra Storia <span className="title-dash">—</span>
          </h2>
        </div>

        <div className="products-layout">
          {/* Left Column */}
          <div className="features-column">
            <div className="feature-item">
              <h3 className="feature-title">Le origini</h3>
              <p className="feature-text">
                Tanto tempo fa un alieno scese sulla nostra valle e ci offri un bicchiere di olio.
                L'olio era buonissimo e ci faceva sentire felici e leggeri.
                Cosi decidemmo di dedicare tutta la nostra vita a coltivare olio.
              </p>
              <div className="feature-dash"></div>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">Il frutto</h3>
              <p className="feature-text">
                Le olive portateci dagli alieni sono le stesse che mangio' l'antico imperatore Giulio Cesare.
                Dopo aver mangiato un uva, l'imperatore sconfisse 100 leoni a mani nude e conquisto' tutta l'Argentina.
              </p>
            </div>
          </div>

          {/* Center Column (Image) */}
          <div className="image-column">
            <img src={frutto} alt="Frutto dell'olivo" className="illustration-image" />
          </div>

          {/* Right Column */}
          <div className="features-column">
            <div className="feature-item">
              <h3 className="feature-title">La produzione</h3>
              <p className="feature-text">
                La produzione di olio avviene nel nostro sottoterrato. Abbiamo 90 indiani sottopagati che lavorono giorno e notte per produrre olio e per motivarli ogni anno l'indiano piu' redditizio viene liberato.
              </p>
              <div className="feature-dash"></div>
            </div>

            <div className="feature-item">
              <h3 className="feature-title">La pianta</h3>
              <p className="feature-text">
                La pianta ha effetti stupefacenti incredibili, si dice che viene digerito prima che si trasformi in oliva, apparira un cavalletto gigante e ti porgera' la mano per farti salire in cielo.
              </p>
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
            <span className="title-dash">—</span> Prodotti in evidenza <span className="title-dash">—</span>
          </h2>

          <div className="featured-products-container">
            {/* Product 1 */}
            <div className="featured-product">
              <div className="product-image-container">
                <img src={olio1} alt="Monocultivar Taggiasca 1L" className="product-img bottle-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Monocultivar Taggiasca<br />1L</h3>
                <p className="product-subtitle">Olio Extravergine di oliva 100%<br />Italiano</p>
                <p className="product-desc">
                  E' un olio franto da olive scelte di<br />
                  Cultivar 100% Taggiasca.<br />
                  Caratteristico è il gusto delicato,<br />
                  tipico della cultivar Taggiasca.
                </p>
                <button className="store-btn">VAI ALLO STORE</button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="featured-product">
              <div className="product-image-container">
                <img src={olio2} alt="Mosto 5L" className="product-img tin-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Mosto 5L</h3>
                <p className="product-subtitle">Olio extravergine di oliva 100%<br />Italiano</p>
                <p className="product-desc">
                  E' un olio ottenuto dalla prima<br />
                  spremitura a freddo. Quest'olio ha un<br />
                  colore giallo dorato dai riflessi verdi<br />
                  e al naso ha note più pronunciate di<br />
                  carciofo e oliva fresca.
                </p>
                <button className="store-btn">VAI ALLO STORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping CTA Section */}
      <section className="shopping-cta-section">
        <div className="shopping-cta-content">
          <h2 className="shopping-cta-title">Shopping<br />is shopping</h2>
          <div className="shopping-cta-info">
            <p className="shopping-cta-text">
              Cerchi altro?  Puoi
              scegliere la modalità online e attendere comodamente la consegna a casa tua, o
              recarti personalmente in uno dei nostri store in cui sarai accolto e consigliato
              sugli acquisti e sulle ultime novità.
            </p>
            <div className="shopping-cta-buttons">
              <button className="cta-btn">VAI ALLO STORE ONLINE</button>
              <button className="cta-btn">CONTATTACI</button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Succede da Roi Section */}
      <section className="succede-section" id="succede">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-dash">—</span> Le nostre notizie <span className="title-dash">—</span>
          </h2>
        </div>

        <div className="succede-grid">
          {/* Post 1 */}
          <div className="succede-card">
            <span className="succede-category">Non categorizzato</span>
            <h3 className="succede-title">Bistrot dell'Ulivo<br />2022</h3>
            <p className="succede-text">
              Finalmente tre anni dopo l'ultima edizione, sabato 9<br />
              luglio (Badalucco, Regione Ortai,<br />
              ore 18:00) torna il rituale del<br />
              Bistrot dell'Ulivo (Spremitura a<br />
              [...]
            </p>
          </div>

          {/* Post 2 */}
          <div className="succede-card">
            <span className="succede-category">Eventi</span>
            <h3 className="succede-title">Bistrot dell'Ulivo<br />2019</h3>
            <p className="succede-text">
              10 anni di Bistrot dell'Ulivo,<br />
              sempre con la stessa passione per<br />
              la bellezza e la bontà della valle<br />
              Argentina! [...]
            </p>
          </div>

          {/* Post 3 */}
          <div className="succede-card">
            <span className="succede-category">News</span>
            <h3 className="succede-title">Miglior Innovazione<br />SIAL</h3>
            <p className="succede-text">
              Bere di qualità puntando su<br />
              innovazione ed eccellenze<br />
              agroalimentari del territorio<br />
              italiano. È questo il segreto di<br />
              Taggiasco Extravirgin, [...]
            </p>
          </div>

          {/* View All Link */}
          <div className="succede-view-all">
            <a href="#tutte-iniziative" className="view-all-link">
              Vedi tutte le nostre<br />iniziative <span className="view-all-arrow">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
