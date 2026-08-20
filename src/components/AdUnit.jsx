import React, { useEffect } from 'react';
import { Monitor } from 'lucide-react';

export default function AdUnit({ type = 'leaderboard', label = 'Google AdSense Placeholder', adClient = '', adSlot = '' }) {
  useEffect(() => {
    if (adClient && adSlot && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense push error:', e);
      }
    }
  }, [adClient, adSlot]);

  // If real AdSense credentials are provided, render the live AdSense ad tag
  if (adClient && adSlot) {
    return (
      <div className="ad-unit">
        <div className="ad-label">ADVERTISEMENT</div>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Placeholder shown prior to AdSense account approval (AdSense compliant formatting)
  return (
    <div className="ad-unit">
      <div className="ad-label">ADVERTISEMENT</div>
      <div className={`ad-content-box ${type}-ad`}>
        <Monitor size={24} style={{ color: 'var(--ad-text)', opacity: 0.7 }} />
        <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{label}</div>
        <div className="ad-subtext">
          {type === 'leaderboard' && 'Standard Responsive Banner Unit (728x90 / Auto)'}
          {type === 'sidebar' && 'Sticky Sidebar Display Unit (300x250 / 300x600)'}
          {type === 'in-article' && 'In-Article Flow Unit (Responsive Text + Image Ad)'}
        </div>
      </div>
    </div>
  );
}
