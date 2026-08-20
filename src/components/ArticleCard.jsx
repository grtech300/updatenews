import React from 'react';
import { Clock, Calendar, Bookmark, BookmarkCheck } from 'lucide-react';

export default function ArticleCard({ article, onSelectArticle, isBookmarked, onToggleBookmark }) {
  return (
    <article className="article-card">
      <div 
        className="card-image-wrap" 
        onClick={() => onSelectArticle(article.id)}
        style={{ cursor: 'pointer' }}
      >
        <img 
          src={article.image} 
          alt={article.title} 
          className="card-image"
          loading="lazy"
        />
        <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
          <span className={`badge badge-${article.category}`}>
            {article.categoryLabel}
          </span>
        </div>
      </div>

      <div className="card-body">
        <div className="meta-row" style={{ marginBottom: '0.4rem', fontSize: '0.8rem' }}>
          <span><Calendar size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />{article.publishedAt}</span>
          <span>•</span>
          <span><Clock size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />{article.readTime}</span>
        </div>

        <h3 
          className="card-title" 
          onClick={() => onSelectArticle(article.id)}
          style={{ cursor: 'pointer' }}
        >
          {article.title}
        </h3>

        <p className="card-excerpt">{article.excerpt}</p>

        <div className="meta-row" style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)', justifyContent: 'space-between' }}>
          <div className="author-info">
            <img src={article.author.avatar} alt={article.author.name} className="author-avatar" />
            <span style={{ fontSize: '0.85rem' }}>{article.author.name}</span>
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); onToggleBookmark(article.id); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: isBookmarked ? 'var(--accent-color)' : 'var(--text-muted)' }}
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
          >
            {isBookmarked ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
          </button>
        </div>
      </div>
    </article>
  );
}
