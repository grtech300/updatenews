import React from 'react';
import { Newspaper, Target, Users, Award, CheckCircle } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="container">
      <div className="policy-container">
        <div className="policy-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
            <Newspaper size={28} />
            <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem' }}>About Update News</span>
          </div>
          <h1>About Our Newsroom & Mission</h1>
          <p className="policy-last-updated">Independent, Factual, & Objective Journalism</p>
        </div>

        <div className="policy-content">
          <div className="policy-box">
            <p style={{ margin: 0, fontWeight: 500, fontSize: '1.05rem' }}>
              <strong>Update News</strong> is a digital publication dedicated to providing readers around the globe with timely, objective, and deeply researched coverage across Technology, Business, World Diplomacy, Science, Health, and Culture.
            </p>
          </div>

          <h2>Our Editorial Mission</h2>
          <p>
            Founded in 2026, our newsroom operates under a commitment to accuracy, independence, and analytical depth. In an era dominated by superficial headlines and rapid misinformation, Update News strives to provide clear context, expert analysis, and verifiable facts.
          </p>

          <h2>Core Editorial Principles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', margin: '1.5rem 0' }}>
            <div style={{ background: 'var(--bg-surface-elevated)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                <CheckCircle size={20} />
                <span>Fact-Checked Reporting</span>
              </div>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>Every article undergoes rigorous peer-review and multi-source verification prior to publication.</p>
            </div>

            <div style={{ background: 'var(--bg-surface-elevated)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                <Award size={20} />
                <span>Editorial Independence</span>
              </div>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>Our reporting is independent of commercial sponsors, advertisers, or political interests.</p>
            </div>

            <div style={{ background: 'var(--bg-surface-elevated)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent-color)' }}>
                <Users size={20} />
                <span>Expert Contributors</span>
              </div>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>Written by experienced journalists, astrophysicists, financial analysts, and healthcare specialists.</p>
            </div>
          </div>

          <h2>Newsroom Leadership & Authors</h2>
          <p>
            Our global team of correspondents spans North America, Europe, and Asia-Pacific. We pride ourselves on giving voice to technical domain experts who can break down complex developments into actionable insights for the general public.
          </p>

          <h2>Editorial Office & Inquiries</h2>
          <p>
            We welcome feedback, corrections, press releases, and editorial inquiries. Please visit our <a href="#contact">Contact Us</a> page or email our managing editor at <code>editor@updatenews.vercel.app</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
