import React from 'react';
import { ShieldCheck, Lock, Eye, Cookie, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="container">
      <div className="policy-container">
        <div className="policy-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
            <ShieldCheck size={28} />
            <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem' }}>Legal & Trust Center</span>
          </div>
          <h1>Privacy Policy</h1>
          <p className="policy-last-updated">Last Updated & Effective: August 20, 2026</p>
        </div>

        <div className="policy-content">
          <div className="policy-box">
            <p style={{ margin: 0, fontWeight: 500 }}>
              At <strong>Update News</strong>, accessible from <a href="https://updatenews.vercel.app">https://updatenews.vercel.app</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information collected and recorded by Update News and how we use it, specifically adhering to <strong>Google AdSense policies</strong> and international privacy regulations.
            </p>
          </div>

          <h2>1. Information We Collect</h2>
          <p>
            When you visit Update News, we may collect both personal and non-personal identification information:
          </p>
          <ul>
            <li><strong>Log Files:</strong> Like most standard website servers, Update News uses log files. The information inside log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks to analyze trends, administer the site, track user movement, and gather demographic information.</li>
            <li><strong>Personal Data Submitted Voluntarily:</strong> When you subscribe to our newsletter, fill out our Contact Us form, or leave comments, we collect details such as your name and email address.</li>
          </ul>

          <h2>2. Google AdSense & Third-Party Advertising Vendors</h2>
          <p>
            Google is a third-party vendor on our site. Google uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to <code>https://updatenews.vercel.app</code> and other sites on the internet.
          </p>
          <ul>
            <li>Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
            <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> or <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>.</li>
          </ul>

          <h2>3. Cookies and Web Beacons</h2>
          <p>
            Update News uses 'cookies' to store information including visitors' preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>

          <h2>4. Privacy Rights (GDPR & CCPA Compliance)</h2>
          <p>
            We respect your data protection rights. Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you are entitled to:
          </p>
          <ul>
            <li><strong>The Right to Access:</strong> You have the right to request copies of your personal data.</li>
            <li><strong>The Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
            <li><strong>The Right to Erasure:</strong> You have the right to request that we erase your personal data under certain conditions.</li>
            <li><strong>Do Not Sell My Personal Information:</strong> We do not sell user personal data to third parties.</li>
          </ul>

          <h2>5. Children's Information</h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. Update News does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>

          <h2>6. Contact Privacy Officer</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our Editorial Privacy Team at <code>privacy@updatenews.vercel.app</code> or via our <a href="#contact">Contact Us</a> page.
          </p>
        </div>
      </div>
    </div>
  );
}
