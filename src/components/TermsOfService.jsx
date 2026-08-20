import React from 'react';
import { FileText, Scale, ShieldAlert } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="container">
      <div className="policy-container">
        <div className="policy-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
            <Scale size={28} />
            <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem' }}>Terms & Governance</span>
          </div>
          <h1>Terms of Service</h1>
          <p className="policy-last-updated">Effective Date: August 20, 2026</p>
        </div>

        <div className="policy-content">
          <p>
            Welcome to <strong>Update News</strong>! These Terms of Service outline the rules and regulations for using the Update News Website located at <code>https://updatenews.vercel.app</code>.
          </p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Update News if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, Update News and/or its licensors own the intellectual property rights for all material on Update News. All intellectual property rights are reserved. You may access this from Update News for your own personal use subjected to restrictions set in these terms and conditions.
          </p>

          <h2>3. User Comments & Conduct</h2>
          <p>
            Parts of this website offer an opportunity for users to post and exchange opinions and information. Update News does not filter, edit, publish or review comments prior to their presence on the website. Comments do not reflect the views and opinions of Update News.
          </p>

          <h2>4. Disclaimer of Liability</h2>
          <p>
            The materials on Update News's website are provided on an 'as is' basis. Update News makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </div>
      </div>
    </div>
  );
}
