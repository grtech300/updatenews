import React, { useState, useEffect } from 'react';
import { CATEGORIES, ARTICLES, BREAKING_NEWS } from './data/newsData';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleCard from './components/ArticleCard';
import ArticleView from './components/ArticleView';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Disclaimer from './components/Disclaimer';
import { Newspaper, TrendingUp, SearchX, BookmarkCheck, Calendar, Clock } from 'lucide-react';

export default function App() {
  const [activeRoute, setActiveRoute] = useState('home'); // 'home', 'article', 'about', 'contact', 'privacy', 'terms', 'disclaimer', 'bookmarks'
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  
  // Dark/Light Theme Switch
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('updatenews_theme') || 'light';
  });

  // Bookmarks state
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('updatenews_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('updatenews_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('updatenews_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleBookmark = (id) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const handleSelectArticle = (id) => {
    setSelectedArticleId(id);
    setActiveRoute('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (route) => {
    setActiveRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtering Articles
  const filteredArticles = ARTICLES.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.tags && article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  // Spotlight Hero Article & Trending Articles
  const heroArticle = ARTICLES.find(a => a.featured) || ARTICLES[0];
  const trendingArticles = ARTICLES.filter(a => a.trending);
  const selectedArticle = ARTICLES.find(a => a.id === selectedArticleId) || ARTICLES[0];
  const bookmarkedArticles = ARTICLES.filter(a => bookmarks.includes(a.id));

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={handleNavigate}
        activeRoute={activeRoute}
        tickerText={BREAKING_NEWS[0]}
        bookmarksCount={bookmarks.length}
      />

      <main style={{ flex: 1 }}>


        {/* HOME ROUTE */}
        {activeRoute === 'home' && (
          <div className="container" style={{ margin: '1.5rem auto 2.5rem auto' }}>
            {/* If no search query and 'all' category, show Spotlight Hero */}
            {activeCategory === 'all' && !searchQuery && heroArticle && (
              <section className="hero-card" onClick={() => handleSelectArticle(heroArticle.id)} style={{ cursor: 'pointer' }}>
                <div className="hero-image-wrapper">
                  <img src={heroArticle.image} alt={heroArticle.title} className="hero-image" />
                  <div style={{ position: 'absolute', top: '15px', left: '15px' }}>
                    <span className={`badge badge-${heroArticle.category}`}>
                      ★ SPOTLIGHT • {heroArticle.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="hero-content">
                  <div className="meta-row">
                    <span><Calendar size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />{heroArticle.publishedAt}</span>
                    <span>•</span>
                    <span><Clock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />{heroArticle.readTime}</span>
                  </div>

                  <h2 className="hero-title">{heroArticle.title}</h2>
                  <p className="hero-excerpt">{heroArticle.excerpt}</p>

                  <div className="meta-row" style={{ justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem' }}>
                    <div className="author-info">
                      <img src={heroArticle.author.avatar} alt={heroArticle.author.name} className="author-avatar" />
                      <span>{heroArticle.author.name} — {heroArticle.author.role}</span>
                    </div>

                    <span style={{ fontWeight: 700, color: 'var(--accent-color)', fontSize: '0.9rem' }}>Read Full Analysis →</span>
                  </div>
                </div>
              </section>
            )}

            <div className="layout-grid">
              {/* Main News Articles Grid */}
              <section>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0, textTransform: 'capitalize' }}>
                    {searchQuery ? `Search Results for "${searchQuery}"` : activeCategory === 'all' ? 'Latest Global Coverage' : `${CATEGORIES.find(c => c.id === activeCategory)?.label} News`}
                  </h2>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {filteredArticles.length} Stories Available
                  </span>
                </div>

                {filteredArticles.length > 0 ? (
                  <div className="articles-grid">
                    {filteredArticles.map(article => (
                      <ArticleCard 
                        key={article.id}
                        article={article}
                        onSelectArticle={handleSelectArticle}
                        isBookmarked={bookmarks.includes(article.id)}
                        onToggleBookmark={toggleBookmark}
                      />
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <SearchX size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>No stories matched your search</h3>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Try clearing your search query or switching news category filters.</p>
                  </div>
                )}
              </section>

              {/* Sidebar Widgets */}
              <aside className="sidebar">
                <div className="widget">
                  <h3 className="widget-title">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <TrendingUp size={18} style={{ color: 'var(--accent-color)' }} />
                      Trending Headlines
                    </span>
                  </h3>
                  
                  <div className="trending-list">
                    {trendingArticles.map((article, idx) => (
                      <div key={article.id} className="trending-item" onClick={() => handleSelectArticle(article.id)}>
                        <span className="trending-number">0{idx + 1}</span>
                        <div className="trending-content">
                          <h4>{article.title}</h4>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {article.categoryLabel} • {article.readTime}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


              </aside>
            </div>
          </div>
        )}

        {/* SINGLE ARTICLE ROUTE */}
        {activeRoute === 'article' && selectedArticle && (
          <ArticleView 
            article={selectedArticle}
            allArticles={ARTICLES}
            onSelectArticle={handleSelectArticle}
            isBookmarked={bookmarks.includes(selectedArticle.id)}
            onToggleBookmark={toggleBookmark}
            onNavigate={handleNavigate}
          />
        )}

        {/* BOOKMARKS ROUTE */}
        {activeRoute === 'bookmarks' && (
          <div className="container" style={{ margin: '2rem auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <BookmarkCheck size={28} style={{ color: 'var(--accent-color)' }} />
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>Saved Articles & Reading List ({bookmarkedArticles.length})</h1>
            </div>

            {bookmarkedArticles.length > 0 ? (
              <div className="articles-grid">
                {bookmarkedArticles.map(article => (
                  <ArticleCard 
                    key={article.id}
                    article={article}
                    onSelectArticle={handleSelectArticle}
                    isBookmarked={true}
                    onToggleBookmark={toggleBookmark}
                  />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <BookmarkCheck size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
                <h3>No bookmarked stories yet</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Click the bookmark icon on any news card to save stories for later offline reading.</p>
              </div>
            )}
          </div>
        )}

        {/* ADSENSE COMPLIANCE MANDATORY PAGES */}
        {activeRoute === 'about' && <AboutUs />}
        {activeRoute === 'contact' && <ContactUs />}
        {activeRoute === 'privacy' && <PrivacyPolicy />}
        {activeRoute === 'terms' && <TermsOfService />}
        {activeRoute === 'disclaimer' && <Disclaimer />}
      </main>

      <Footer 
        onNavigate={handleNavigate} 
        onSelectCategory={setActiveCategory}
        categories={CATEGORIES}
      />
    </div>
  );
}
