import './Blog.css';
import valleditria from '../assets/valleditria.jpg';
import frutto from '../assets/frutto.jpg';
import hero from '../assets/hero.png';

const articles = [
  {
    date: 'Apr 29 2021',
    title: 'Gaaci Biologico',
    excerpt: 'Olio extravergine di oliva DOP biologico Riviera Ligure — Riviera dei Fiori 2021/2022',
    image: valleditria,
  },
  {
    date: 'Apr 28 2021',
    title: 'Riva Gianca',
    excerpt: 'Olio extravergine di oliva DOP Riviera Ligure – Riviera dei Fiori 2021/2022',
    image: frutto,
  },
  {
    date: 'Apr 28 2021',
    title: 'Morgaa Biologico',
    excerpt: 'Olio extra vergine di oliva biologico DOP Riviera Ligure — Riviera dei Fiori 2020/2021',
    image: hero,
  },
  {
    date: 'Apr 27 2021',
    title: 'Mosto Storico',
    excerpt: 'Olio extravergine di oliva ottenuto dalla prima spremitura a freddo delle olive Taggiasche',
    image: frutto,
  },
  {
    date: 'Apr 26 2021',
    title: 'Cultivar Taggiasca',
    excerpt: 'Olio extravergine di oliva 100% Italiano dal gusto delicato tipico della Taggiasca',
    image: valleditria,
  },
  {
    date: 'Apr 25 2021',
    title: 'Bistrot dell\'Ulivo',
    excerpt: 'Il rituale della spremitura a freddo torna nella Valle Argentina con la consueta passione',
    image: hero,
  },
];

export default function Blog() {
  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">Roiportage</h1>
          <p className="blog-hero-text">
            I nostri racconti, la nostra storia, ma anche quelli di amici vicini e lontani che
            fanno parte della realtà di Olio Roi in modo diretto o collaterale. Scoprite i nostri
            inviati molto speciali.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="blog-articles">
        <div className="blog-grid">
          {articles.map((article) => (
            <article className="blog-card" key={article.title}>
              <span className="blog-card-date">
                <span className="blog-card-dash">—</span> {article.date}
              </span>
              <a href="#" className="blog-card-image">
                <img src={article.image} alt={article.title} />
              </a>
              <h2 className="blog-card-title">
                <a href="#">{article.title}</a>
              </h2>
              <p className="blog-card-excerpt">
                {article.excerpt}<a href="#" className="blog-card-more">[...]</a>
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
