import React, { useState } from 'react';
import { Newspaper, Mail, ShieldCheck, Heart, Send } from 'lucide-react';

export default function Footer({ onNavigate, onSelectCategory, categories }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="brand-logo" style={{ fontSize: '1.4rem' }}>
              <div className="brand-badge" style={{ padding: '0.25rem 0.5rem', fontSize: '0.9rem' }}>
                <Newspaper size={18} />
              </div>
              <div className="brand-text">
                UPDATE <span>NEWS</span>
              </div>
            </div>
            <p>
              Update News is a premier global news digital publication providing objective reporting, in-depth analysis, and expert perspective on technology, market economics, world affairs, and scientific breakthroughs.
            </p>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="footer-title">News Desks</h4>
            <ul className="footer-links">
              {categories.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <a href={`#${cat.id}`} onClick={(e) => { e.preventDefault(); onSelectCategory(cat.id); onNavigate('home'); }}>
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AdSense Legal & Policy Links */}
          <div>
            <h4 className="footer-title">Trust & Governance</h4>
            <ul className="footer-links">
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Our Newsroom</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact Us</a></li>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}>Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }}>Terms of Service</a></li>
              <li><a href="#disclaimer" onClick={(e) => { e.preventDefault(); onNavigate('disclaimer'); }}>AdSense Disclaimer</a></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="footer-title">Daily Briefing Newsletter</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              Get curated morning headlines and deep analytical reports delivered straight to your inbox daily.
            </p>
            {subscribed ? (
              <div style={{ color: 'var(--category-business)', fontSize: '0.85rem', fontWeight: 600 }}>
                ✓ Thank you for subscribing to the Daily Briefing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: '0.85rem' }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '0.5rem 0.85rem' }}>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © 2026 <strong>Update News Media Group</strong>. All rights reserved. Registered Digital Publication.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Compliant with Google AdSense Policies & Better Ads Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
