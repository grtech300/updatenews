import React, { useState } from 'react';
import { Newspaper, Search, Moon, Sun, Menu, X, Bookmark, Rss, Layers, FileText } from 'lucide-react';

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

  const handleBookmarkClick = () => {
    onSearchChange('');
    if (activeRoute === 'bookmarks') {
      onNavigate('home');
    } else {
      onNavigate('bookmarks');
    }
  };

  const handleLogoClick = () => {
    onSearchChange('');
    onSelectCategory('all');
    onNavigate('home');
  };

  return (
    <>
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
                onClick={() => { onSearchChange(''); onNavigate('about'); }} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: activeRoute === 'about' ? 'var(--accent-color)' : 'inherit', fontWeight: activeRoute === 'about' ? 700 : 500 }}
              >
                About Us
              </button>
              <span>•</span>
              <button 
                onClick={() => { onSearchChange(''); onNavigate('contact'); }} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: activeRoute === 'contact' ? 'var(--accent-color)' : 'inherit', fontWeight: activeRoute === 'contact' ? 700 : 500 }}
              >
                Contact Us
              </button>
              <span>•</span>
              <button 
                onClick={() => { onSearchChange(''); onNavigate('privacy'); }} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: activeRoute === 'privacy' ? 'var(--accent-color)' : 'inherit', fontWeight: activeRoute === 'privacy' ? 700 : 500 }}
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Main Header Area */}
        <div className="container header-main">
          <div className="brand-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
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
            {/* 1. Bookmark Button */}
            <button 
              className={`icon-btn ${activeRoute === 'bookmarks' ? 'active' : ''}`}
              onClick={handleBookmarkClick}
              title="Saved Reading List"
              aria-label="Bookmarks"
              style={{ 
                position: 'relative',
                background: activeRoute === 'bookmarks' ? 'var(--accent-light)' : undefined,
                color: activeRoute === 'bookmarks' ? 'var(--accent-color)' : undefined,
                borderColor: activeRoute === 'bookmarks' ? 'var(--accent-color)' : undefined
              }}
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
                  justifyContent: 'center',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* 2. Theme Switcher Button */}
            <button 
              className="icon-btn" 
              onClick={onToggleTheme} 
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} style={{ color: '#f59e0b' }} /> : <Moon size={20} />}
            </button>

            {/* 3. Mobile Navigation Drawer Toggle */}
            <button 
              className="icon-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              title="Toggle Menu Drawer"
              aria-label="Toggle navigation menu"
              style={{
                background: mobileMenuOpen ? 'var(--accent-light)' : undefined,
                color: mobileMenuOpen ? 'var(--accent-color)' : undefined
              }}
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
                    className={`nav-item-btn ${activeCategory === cat.id && activeRoute === 'home' && !searchQuery ? 'active' : ''}`}
                    onClick={() => {
                      onSearchChange('');
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
      </header>

      {/* Mobile Drawer Overlay (Rendered outside header stack so backdrop-filter doesn't trap fixed position) */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <div className="brand-logo" onClick={() => { handleLogoClick(); setMobileMenuOpen(false); }} style={{ fontSize: '1.25rem', cursor: 'pointer' }}>
                <div className="brand-badge" style={{ padding: '0.2rem 0.4rem', fontSize: '0.8rem' }}>
                  <Newspaper size={16} />
                </div>
                UPDATE <span>NEWS</span>
              </div>
              <button className="icon-btn" onClick={() => setMobileMenuOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Quick Actions in Drawer */}
            <div style={{ display: 'flex', gap: '0.5rem', margin: '0.5rem 0' }}>
              <button 
                onClick={() => { handleBookmarkClick(); setMobileMenuOpen(false); }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem',
                  borderRadius: 'var(--radius-md)',
                  background: activeRoute === 'bookmarks' ? 'var(--accent-color)' : 'var(--bg-surface-elevated)',
                  color: activeRoute === 'bookmarks' ? 'white' : 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }}
              >
                <Bookmark size={16} />
                <span>Bookmarks ({bookmarksCount})</span>
              </button>

              <button 
                onClick={onToggleTheme}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 0.9rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-surface-elevated)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }}
              >
                {theme === 'dark' ? <Sun size={16} style={{ color: '#f59e0b' }} /> : <Moon size={16} />}
                <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
              </button>
            </div>

            {/* Categories Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Layers size={14} /> Categories
              </span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  style={{
                    textAlign: 'left',
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: activeCategory === cat.id && activeRoute === 'home' ? '700' : '500',
                    color: activeCategory === cat.id && activeRoute === 'home' ? 'var(--accent-color)' : 'var(--text-primary)',
                    background: activeCategory === cat.id && activeRoute === 'home' ? 'var(--accent-light)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    onSearchChange('');
                    onSelectCategory(cat.id);
                    onNavigate('home');
                    setMobileMenuOpen(false);
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Pages Section */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <FileText size={14} /> Pages & Governance
              </span>
              <button onClick={() => { onSearchChange(''); onNavigate('about'); setMobileMenuOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem 0.75rem', border: 'none', background: 'none', cursor: 'pointer', color: activeRoute === 'about' ? 'var(--accent-color)' : 'var(--text-primary)' }}>About Us</button>
              <button onClick={() => { onSearchChange(''); onNavigate('contact'); setMobileMenuOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem 0.75rem', border: 'none', background: 'none', cursor: 'pointer', color: activeRoute === 'contact' ? 'var(--accent-color)' : 'var(--text-primary)' }}>Contact Us</button>
              <button onClick={() => { onSearchChange(''); onNavigate('privacy'); setMobileMenuOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem 0.75rem', border: 'none', background: 'none', cursor: 'pointer', color: activeRoute === 'privacy' ? 'var(--accent-color)' : 'var(--text-primary)' }}>Privacy Policy</button>
              <button onClick={() => { onSearchChange(''); onNavigate('terms'); setMobileMenuOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem 0.75rem', border: 'none', background: 'none', cursor: 'pointer', color: activeRoute === 'terms' ? 'var(--accent-color)' : 'var(--text-primary)' }}>Terms of Service</button>
              <button onClick={() => { onSearchChange(''); onNavigate('disclaimer'); setMobileMenuOpen(false); }} style={{ textAlign: 'left', padding: '0.5rem 0.75rem', border: 'none', background: 'none', cursor: 'pointer', color: activeRoute === 'disclaimer' ? 'var(--accent-color)' : 'var(--text-primary)' }}>AdSense Disclaimer</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
