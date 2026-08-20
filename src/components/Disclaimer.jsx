import React from 'react';
import { AlertCircle, ExternalLink, Info } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="container">
      <div className="policy-container">
        <div className="policy-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
            <AlertCircle size={28} />
            <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem' }}>Editorial Transparency</span>
          </div>
          <h1>AdSense & Editorial Disclaimer</h1>
          <p className="policy-last-updated">Last Reviewed: August 20, 2026</p>
        </div>

        <div className="policy-content">
          <div className="policy-box">
            <p style={{ margin: 0 }}>
              The information provided by <strong>Update News</strong> ("we," "us," or "our") on <code>https://updatenews.vercel.app</code> is for general informational and educational purposes only. All information on the Site is provided in good faith.
            </p>
          </div>

          <h2>1. Advertisement & Google AdSense Disclosure</h2>
          <p>
            This website uses <strong>Google AdSense</strong> and may contain third-party ad units, banner advertisements, sponsored content, or affiliate links. Ads displayed on Update News are labeled with clear "ADVERTISEMENT" or "SPONSORED" identifiers in compliance with <strong>Better Ads Standards</strong> and Google AdSense policies.
          </p>

          <h2>2. External Links Disclaimer</h2>
          <p>
            The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>

          <h2>3. Professional & Medical Disclaimer</h2>
          <p>
            Health, scientific, or financial articles published on Update News do not constitute professional advice. Always seek the advice of a qualified healthcare provider or certified financial advisor regarding specific questions or conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
