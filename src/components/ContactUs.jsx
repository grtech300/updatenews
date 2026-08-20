import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Editorial Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      <div className="policy-container">
        <div className="policy-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
            <Mail size={28} />
            <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem' }}>Get In Touch</span>
          </div>
          <h1>Contact Update Newsroom</h1>
          <p className="policy-last-updated">We respond to all verified reader, press, and editorial inquiries within 24 hours.</p>
        </div>

        <div className="layout-grid" style={{ marginTop: '1.5rem' }}>
          <div>
            {submitted ? (
              <div className="alert-success">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.1rem' }}>
                  <CheckCircle2 size={24} />
                  <span>Message Sent Successfully!</span>
                </div>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.95rem' }}>
                  Thank you, <strong>{formData.name}</strong>. Your message has been routed to our newsroom desk. Reference ID: #{Math.floor(100000 + Math.random() * 900000)}.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: 'Editorial Inquiry', message: '' }); }}
                  className="btn-primary" 
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Full Name *</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    className="form-control" 
                    required 
                    placeholder="Jane Doe" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email Address *</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    className="form-control" 
                    required 
                    placeholder="jane@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Inquiry Subject *</label>
                  <select 
                    id="contact-subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  >
                    <option value="Editorial Inquiry">Editorial & Story Tip</option>
                    <option value="Fact Correction">Fact Correction Request</option>
                    <option value="Press / Media">Press & Media Licensing</option>
                    <option value="Privacy Inquiries">Privacy & AdSense Compliance Inquiry</option>
                    <option value="Technical Support">Website Technical Feedback</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message Content *</label>
                  <textarea 
                    id="contact-message"
                    rows="5" 
                    className="form-control" 
                    required 
                    placeholder="Please details your inquiry or message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>Submit Message to Editorial Desk</span>
                </button>
              </form>
            )}
          </div>

          <div className="sidebar">
            <div className="widget">
              <h3 className="widget-title">Direct Contacts</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Mail style={{ color: 'var(--accent-color)', flexShrink: 0 }} size={20} />
                  <div>
                    <strong>General Newsroom</strong>
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>newsroom@updatenews.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Mail style={{ color: 'var(--accent-color)', flexShrink: 0 }} size={20} />
                  <div>
                    <strong>Press & Syndication</strong>
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>press@updatenews.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Phone style={{ color: 'var(--accent-color)', flexShrink: 0 }} size={20} />
                  <div>
                    <strong>Editorial Desk Phone</strong>
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>+1 (800) 555-0199</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <MapPin style={{ color: 'var(--accent-color)', flexShrink: 0 }} size={20} />
                  <div>
                    <strong>Main Office Bureau</strong>
                    <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                      Update News Media Building<br />
                      500 Press Freedom Way, Suite 800<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
