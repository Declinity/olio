import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo_olio.png';
import { useLang } from '../i18n/LanguageContext';
import './Header.css';

type NavChild = { label: string; to: string };
type NavItem = { id: string; label: string; to: string; children?: NavChild[] };

// Internal routes use react-router Link; hash anchors stay plain <a>.
function NavTo({ to, className, children, onClick }: {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  if (to.startsWith('/')) {
    return <Link to={to} className={className} onClick={onClick}>{children}</Link>;
  }
  return <a href={to} className={className} onClick={onClick}>{children}</a>;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const { pathname } = useLocation();
  const { lang, toggle, t } = useLang();

  const navItems: NavItem[] = [
    {
      id: 'prodotti',
      label: t.nav.prodotti,
      to: '/products',
      children: [
        { label: t.nav.allProducts, to: '/products' },
        { label: t.nav.oil500, to: '/products' },
        { label: t.nav.oil1l, to: '/products' },
      ],
    },
    { id: 'galleria', label: t.nav.galleria, to: '/gallery' },
    { id: 'contatti', label: t.nav.contatti, to: '/contact' },
  ];

  // Pages with a dark hero image behind the transparent header can keep white
  // text at the top; other pages need dark text so it stays readable.
  const darkHeroRoutes = ['/', '/blog', '/products'];
  const hasDarkHero = darkHeroRoutes.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''} ${hasDarkHero ? '' : 'dark-top'}`}>
        <div className="header-container">
          {/* Left: Logo */}
          <div className="header-logo">
            <Link to="/">
              <img src={logo} alt="Olio Roi" className="logo-image" />
            </Link>
          </div>

          {/* Center: Navigation (desktop) */}
          <nav className="header-nav">
            <ul className="nav-list">
              <li className="nav-item has-dropdown">
                <Link to="/products" className="nav-link">
                  {t.nav.prodotti} <ChevronDown size={14} className="nav-chevron" />
                </Link>
                <div className="dropdown-menu">
                  <Link to="/products" className="dropdown-link">{t.nav.allProducts}</Link>
                  <Link to="/products" className="dropdown-link">{t.nav.oil500}</Link>
                  <Link to="/products" className="dropdown-link">{t.nav.oil1l}</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">{t.nav.galleria}</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">{t.nav.contatti}</Link>
              </li>
            </ul>
          </nav>

          {/* Right: language toggle + mobile menu */}
          <div className="header-actions">
            <button
              className="action-button lang-selector"
              onClick={toggle}
              aria-label={lang === 'it' ? 'Switch to English' : 'Passa all’italiano'}
            >
              {lang.toUpperCase()}
            </button>
            <button
              className="action-button menu-toggle"
              onClick={() => setIsMenuOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={isMenuOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-menu-top">
          <span className="mobile-menu-heading">{t.nav.menu}</span>
          <button
            className="mobile-menu-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label={t.nav.closeMenu}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li className="mobile-nav-item" key={item.id}>
                {item.children ? (
                  <>
                    <button
                      className="mobile-nav-link mobile-nav-toggle"
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === item.id ? null : item.id)
                      }
                      aria-expanded={openSubmenu === item.id}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`mobile-nav-chevron ${openSubmenu === item.id ? 'rotated' : ''}`}
                      />
                    </button>
                    <ul className={`mobile-submenu ${openSubmenu === item.id ? 'open' : ''}`}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <NavTo
                            to={child.to}
                            className="mobile-submenu-link"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </NavTo>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavTo
                    to={item.to}
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavTo>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
