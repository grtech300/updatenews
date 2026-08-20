import React, { useState } from 'react';
import { Newspaper, Search, Moon, Sun, Menu, X, Bookmark, Rss } from 'lucide-react';

export default function Header({ 
  categories, 
  activeCategory, 
  onSelectCategory, 
  searchQuery, 
  onSearchChange,
  theme,
  onToggleTheme,
  onNavigate,
  activeRoute,
  tickerText,
  bookmarksCount
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Top Breaking News Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="ticker-wrap">
            <span className="ticker-label">Breaking</span>
            <span className="ticker-text">{tickerText}</span>
          </div>
          <div className="top-bar-links">
            <button 
              onClick={() => onNavigate('about')} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: activeRoute === 'about' ? 'var(--accent-color)' : 'inherit' }}
            >
              About Us
            </button>
            <span>•</span>
            <button 
              onClick={() => onNavigate('contact')} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: activeRoute === 'contact' ? 'var(--accent-color)' : 'inherit' }}
            >
              Contact Us
            </button>
            <span>•</span>
            <button 
              onClick={() => onNavigate('privacy')} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: activeRoute === 'privacy' ? 'var(--accent-color)' : 'inherit' }}
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="container header-main">
        <div 
          className="brand-logo" 
          onClick={() => { onNavigate('home'); onSelectCategory('all'); }} 
          style={{ cursor: 'pointer' }}
        >
          <div className="brand-badge">
            <Newspaper size={24} />
          </div>
          <div className="brand-text">
            UPDATE <span>NEWS</span>
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="header-search">
          <div className="search-input-wrap">
            <Search size={18} style={{ color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search news, topics, or analysis..." 
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            {searchQuery && (
              <button onClick={() => onSearchChange('')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={16} style={{ color: 'var(--text-muted)' }} />
              </button>
            )}
          </div>
        </div>

        {/* Header Action Buttons */}
        <div className="header-actions">
          <button 
            className="icon-btn" 
            onClick={() => onNavigate('bookmarks')} 
            title="Bookmarked Articles"
            style={{ position: 'relative' }}
          >
            <Bookmark size={20} />
            {bookmarksCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'var(--accent-color)',
                color: 'white',
                fontSize: '0.65rem',
                fontWeight: 700,
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {bookmarksCount}
              </span>
            )}
          </button>

          <button className="icon-btn" onClick={onToggleTheme} title="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="icon-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            style={{ display: 'flex' }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Primary Category Navigation Bar */}
      <nav className="nav-bar">
        <div className="container">
          <ul className="nav-list">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button 
                  className={`nav-item-btn ${activeCategory === cat.id && activeRoute === 'home' ? 'active' : ''}`}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onNavigate('home');
                  }}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <div className="brand-logo" style={{ fontSize: '1.25rem' }}>
                <Newspaper size={20} />
                UPDATE <span>NEWS</span>
              </div>
              <button className="icon-btn" onClick={() => setMobileMenuOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Categories</span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  style={{
                    textAlign: 'left',
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: activeCategory === cat.id ? '700' : '500',
                    color: activeCategory === cat.id ? 'var(--accent-color)' : 'var(--text-primary)',
                    background: activeCategory === cat.id ? 'var(--accent-light)' : 'transparent'
                  }}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    onNavigate('home');
                    setMobileMenuOpen(false);
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Pages</span>
              <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} style={{ textAlign: 'left' }}>About Us</button>
              <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} style={{ textAlign: 'left' }}>Contact Us</button>
              <button onClick={() => { onNavigate('privacy'); setMobileMenuOpen(false); }} style={{ textAlign: 'left' }}>Privacy Policy</button>
              <button onClick={() => { onNavigate('terms'); setMobileMenuOpen(false); }} style={{ textAlign: 'left' }}>Terms of Service</button>
              <button onClick={() => { onNavigate('disclaimer'); setMobileMenuOpen(false); }} style={{ textAlign: 'left' }}>AdSense Disclaimer</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
