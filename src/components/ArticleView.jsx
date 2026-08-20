import React, { useState } from 'react';
import { ChevronRight, Clock, Calendar, Share2, Bookmark, BookmarkCheck, ThumbsUp, MessageSquare, Send } from 'lucide-react';
import ArticleCard from './ArticleCard';

export default function ArticleView({ article, allArticles, onSelectArticle, isBookmarked, onToggleBookmark, onNavigate }) {
  const [likes, setLikes] = useState(42);
  const [hasLiked, setHasLiked] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, name: 'David Miller', date: '2 hours ago', text: 'An extremely insightful analysis. The architectural breakdown of computational efficiency really puts modern infrastructure costs into perspective.' },
    { id: 2, name: 'Sarah Jenkins', date: '5 hours ago', text: 'Great reporting as always from the Update News editorial desk. Looking forward to the developer tooling benchmarks next quarter.' }
  ]);
  const [newComment, setNewComment] = useState('');
  const [commentName, setCommentName] = useState('');

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    } else {
      setLikes(likes - 1);
      setHasLiked(false);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment && commentName) {
      setComments([
        ...comments,
        { id: Date.now(), name: commentName, date: 'Just now', text: newComment }
      ]);
      setNewComment('');
      setCommentName('');
    }
  };

  // Find related articles in the same category or overall
  const relatedArticles = allArticles
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="container" style={{ margin: '2rem auto' }}>
      <div className="layout-grid">
        <main>
          <article className="article-full">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumbs">
              <span onClick={() => onNavigate('home')} style={{ cursor: 'pointer', color: 'var(--accent-color)' }}>Home</span>
              <ChevronRight size={14} />
              <span style={{ textTransform: 'capitalize' }}>{article.categoryLabel}</span>
              <ChevronRight size={14} />
              <span style={{ color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '300px' }}>{article.title}</span>
            </nav>

            {/* Category & Title */}
            <div style={{ marginBottom: '1rem' }}>
              <span className={`badge badge-${article.category}`}>
                {article.categoryLabel}
              </span>
            </div>

            <div className="article-header">
              <h1>{article.title}</h1>
              <p className="article-lead">{article.leadText}</p>
            </div>

            {/* Author Bar */}
            <div className="author-bar">
              <div className="author-meta">
                <img src={article.author.avatar} alt={article.author.name} className="author-avatar-lg" />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{article.author.name}</div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{article.author.role}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <Calendar size={15} />
                  <span>{article.publishedAt}</span>
                  <span>•</span>
                  <Clock size={15} />
                  <span>{article.readTime}</span>
                </div>

                <div className="social-share-btns">
                  <button 
                    className="share-btn" 
                    onClick={() => onToggleBookmark(article.id)}
                    style={{ color: isBookmarked ? 'var(--accent-color)' : 'inherit' }}
                  >
                    {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                    <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                  </button>

                  <button className="share-btn" onClick={() => alert('Link copied to clipboard!')}>
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="featured-img-wrap">
              <img src={article.image} alt={article.title} style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }} />
              {article.caption && <p className="featured-img-caption">{article.caption}</p>}
            </div>



            {/* Rich Editorial Body */}
            <div 
              className="article-body" 
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />

            {/* Tag List */}
            {article.tags && article.tags.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', margin: '2rem 0 1rem 0' }}>
                <span style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)' }}>TAGS:</span>
                {article.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-color)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)'
                  }}>
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Bio Card */}
            <div style={{
              background: 'var(--bg-surface-elevated)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              margin: '2rem 0',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <img src={article.author.avatar} alt={article.author.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ margin: '0 0 0.25rem 0', fontWeight: 700 }}>About {article.author.name}</h4>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{article.author.bio}</p>
              </div>
            </div>

            {/* Reader Reactions & Comments */}
            <section style={{ borderTop: '2px solid var(--border-color)', paddingTop: '2rem', marginTop: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MessageSquare size={22} />
                  <span>Reader Discussion ({comments.length})</span>
                </h3>
                <button 
                  onClick={handleLike}
                  className="btn-primary" 
                  style={{ 
                    background: hasLiked ? 'var(--accent-dark)' : 'var(--bg-surface-elevated)', 
                    color: hasLiked ? 'white' : 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.85rem'
                  }}
                >
                  <ThumbsUp size={16} />
                  <span>{likes} Helpful</span>
                </button>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} style={{ background: 'var(--bg-surface-elevated)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem' }}>Join the Discussion</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Your Name *" 
                    required 
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                  />
                  <textarea 
                    className="form-control" 
                    rows="3" 
                    placeholder="Share your perspective or insight..." 
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                  <Send size={14} />
                  <span>Post Comment</span>
                </button>
              </form>

              {/* Comments List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {comments.map(c => (
                  <div key={c.id} style={{ background: 'var(--bg-surface)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <strong style={{ fontSize: '0.95rem' }}>{c.name}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.date}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>{c.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </main>

        {/* Article Sidebar */}
        <aside className="sidebar">
          <div className="widget">
            <h3 className="widget-title">Related Coverage</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {relatedArticles.map(rel => (
                <div 
                  key={rel.id} 
                  onClick={() => onSelectArticle(rel.id)}
                  style={{ display: 'flex', gap: '0.75rem', cursor: 'pointer' }}
                >
                  <img src={rel.image} alt={rel.title} style={{ width: '80px', height: '65px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }} />
                  <div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, margin: '0 0 0.25rem 0', lineHeight: 1.3 }}>{rel.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{rel.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
