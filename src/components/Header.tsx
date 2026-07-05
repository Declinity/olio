import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import './Header.css';

type NavChild = { label: string; to: string };
type NavItem = { label: string; to: string; children?: NavChild[] };

const navItems: NavItem[] = [
  {
    label: 'PRODOTTI',
    to: '/products',
    children: [
      { label: 'Tutti i Prodotti', to: '/products' },
      { label: 'Olio', to: '/products' },
      { label: 'Olive', to: '/products' },
    ],
  },
  { label: 'GALLERIA', to: '/gallery' },
  { label: 'EVENTI', to: '/blog' },
  { label: 'CONTATTI', to: '/contact' },
];

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

  // Pages with a dark hero image behind the transparent header can keep white
  // text at the top; other pages need dark text so it stays readable.
  const darkHeroRoutes = ['/', '/blog'];
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
                  PRODOTTI <ChevronDown size={14} className="nav-chevron" />
                </Link>
                <div className="dropdown-menu">
                  <Link to="/products" className="dropdown-link">Tutti i Prodotti</Link>
                  <Link to="/products" className="dropdown-link">Olio</Link>
                  <Link to="/products" className="dropdown-link">Olive</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">GALLERIA</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">EVENTI</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">CONTATTI</Link>
              </li>
            </ul>
          </nav>

          {/* Right: Icons */}
          <div className="header-actions">
            <button className="action-button lang-selector">IT</button>
            <button className="action-button">
              <Search size={20} />
            </button>
            <button className="action-button">
              <User size={20} />
            </button>
            <button className="action-button">
              <ShoppingBag size={20} />
            </button>
            <button
              className="action-button menu-toggle"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Apri il menu"
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
          <span className="mobile-menu-heading">Menu</span>
          <button
            className="mobile-menu-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Chiudi il menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li className="mobile-nav-item" key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="mobile-nav-link mobile-nav-toggle"
                      onClick={() =>
                        setOpenSubmenu(openSubmenu === item.label ? null : item.label)
                      }
                      aria-expanded={openSubmenu === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`mobile-nav-chevron ${openSubmenu === item.label ? 'rotated' : ''}`}
                      />
                    </button>
                    <ul className={`mobile-submenu ${openSubmenu === item.label ? 'open' : ''}`}>
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
