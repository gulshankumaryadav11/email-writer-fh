const landingStyles = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --primary: #1e3c72;
  --primary-light: #2a5298;
  --accent: #4fd1c5;
  --bg: #0f172a;
  --surface: #1e293b;
  --card: #334155;
  --text: #f1f5f9;
  --text-muted: #94a3b8;
  --border: #475569;
  --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  --gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  --gradient-5: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  --gradient-6: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--bg);
  font-family: 'Inter', sans-serif;
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(79, 209, 197, 0.5); }
  50% { box-shadow: 0 0 40px rgba(79, 209, 197, 0.8); }
}

.lp-wrapper {
  min-height: 100vh;
  background: var(--bg);
}

/* NAVBAR */
.lp-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: all 0.3s ease;
}

.lp-nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
}

.logo-icon {
  font-size: 32px;
  filter: drop-shadow(0 0 10px rgba(79, 209, 197, 0.5));
}

.logo-badge {
  background: var(--gradient-1);
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 4px;
}

.lp-nav-links {
  display: flex;
  gap: 32px;
}

.lp-nav-link {
  font-size: 15px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.lp-nav-link:hover {
  color: var(--text);
}

.lp-nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.3s ease;
}

.lp-nav-link:hover::after {
  width: 100%;
}

.lp-btn-primary {
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  background: var(--gradient-1);
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.lp-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.lp-btn-ghost {
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid var(--border);
  color: var(--text);
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  transition: all 0.3s ease;
}

.lp-btn-ghost:hover {
  background: var(--surface);
  border-color: var(--accent);
  color: var(--accent);
}

/* HERO */
.lp-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  background: radial-gradient(ellipse at top, #1e293b 0%, #0f172a 50%);
  position: relative;
  overflow: hidden;
}

.lp-hero-glow {
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(79, 209, 197, 0.3) 0%, transparent 70%);
  filter: blur(100px);
  animation: float 6s ease-in-out infinite;
}

.lp-hero-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, rgba(79, 209, 197, 0.3), transparent),
    radial-gradient(2px 2px at 60% 70%, rgba(102, 126, 234, 0.3), transparent),
    radial-gradient(1px 1px at 50% 50%, rgba(244, 114, 182, 0.3), transparent);
  background-size: 200px 200px;
  animation: float 8s ease-in-out infinite;
}

.lp-hero-content {
  max-width: 800px;
  text-align: center;
  z-index: 2;
  position: relative;
}

.lp-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(79, 209, 197, 0.1);
  border: 1px solid rgba(79, 209, 197, 0.3);
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 24px;
  animation: slideUp 0.6s ease;
}

.badge-pulse {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.lp-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(48px, 8vw, 72px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  animation: slideUp 0.6s ease 0.1s both;
}

.title-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-highlight {
  background: linear-gradient(135deg, #4fd1c5 0%, #38f9d7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lp-sub {
  font-size: 18px;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.7;
  animation: slideUp 0.6s ease 0.2s both;
}

.lp-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: slideUp 0.6s ease 0.3s both;
}

.lp-btn-hero {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  background: var(--gradient-1);
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.lp-btn-hero:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 35px rgba(102, 126, 234, 0.6);
}

.btn-arrow {
  transition: transform 0.3s ease;
}

.lp-btn-hero:hover .btn-arrow {
  transform: translateX(4px);
}

.lp-btn-hero-ghost {
  display: flex;
  align-items: center;
  padding: 16px 28px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.lp-btn-hero-ghost:hover {
  background: var(--surface);
  border-color: var(--accent);
  color: var(--accent);
}

.lp-trust-badges {
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-top: 48px;
  animation: slideUp 0.6s ease 0.4s both;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-muted);
}

.trust-icon {
  font-size: 16px;
}

/* STATS */
.lp-stats {
  padding: 80px 24px;
  background: var(--surface);
}

.lp-stats-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-card {
  text-align: center;
  padding: 24px;
  background: var(--card);
  border-radius: 16px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
}

.stat-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.stat-num {
  font-size: 36px;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: var(--text-muted);
}

/* FEATURES */
.lp-features {
  padding: 100px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.lp-section-label {
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
}

.lp-section-title {
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 48px;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.2;
}

.lp-feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.lp-feature-card {
  padding: 32px;
  background: var(--card);
  border-radius: 20px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.lp-feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-1);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.lp-feature-card:hover::before {
  transform: scaleX(1);
}

.lp-feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--accent);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.lp-feature-icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.lp-feature-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 28px;
  background: var(--gradient-1);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.lp-feature-name {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;
}

.lp-feature-desc {
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.6;
  text-align: center;
}

/* CTA */
.lp-cta {
  padding: 100px 24px;
  background: linear-gradient(135deg, var(--surface) 0%, var(--card) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.cta-content {
  flex: 1;
}

.cta-badge {
  display: inline-block;
  padding: 6px 12px;
  background: rgba(244, 114, 182, 0.1);
  border: 1px solid rgba(244, 114, 182, 0.3);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #f472b6;
  margin-bottom: 20px;
}

.lp-cta-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 20px;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.2;
}

.cta-highlight {
  background: linear-gradient(135deg, #f472b6 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.lp-cta-sub {
  font-size: 18px;
  color: var(--text-muted);
  margin-bottom: 32px;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cta-guarantee {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--text-muted);
}

.guarantee-icon {
  color: #10b981;
  font-weight: bold;
}

.cta-visual {
  flex: 0 0 300px;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.cta-chart {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 100%;
}

.chart-bar {
  width: 24px;
  background: var(--gradient-1);
  border-radius: 8px 8px 0 0;
  animation: float 3s ease-in-out infinite;
}

.chart-bar:nth-child(2) { animation-delay: 0.2s; }
.chart-bar:nth-child(3) { animation-delay: 0.4s; }
.chart-bar:nth-child(4) { animation-delay: 0.6s; }
.chart-bar:nth-child(5) { animation-delay: 0.8s; }

/* FOOTER */
.lp-footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 60px 40px 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto 40px;
}

.footer-brand {
  max-width: 300px;
}

.lp-footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 16px;
}

.footer-desc {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: monospace;
  font-weight: bold;
}

.social-link:hover {
  background: var(--accent);
  color: white;
  border-color: var(--accent);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.link-group h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 16px;
}

.link-group a {
  display: block;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 12px;
  font-size: 14px;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--accent);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid var(--border);
  max-width: 1200px;
  margin: 0 auto;
}

.lp-footer-copy {
  color: var(--text-muted);
  font-size: 14px;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: var(--accent);
}

/* AUTH MODAL */
.lp-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.lp-login-card {
  background: var(--surface);
  padding: 40px;
  border-radius: 20px;
  width: 400px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border);
  position: relative;
  z-index: 10000;
}

.lp-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: none;
  font-size: 24px;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.3s ease;
}

.lp-close-btn:hover {
  color: var(--text);
}

.lp-login-logo {
  text-align: center;
  font-weight: 900;
  margin-bottom: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 28px;
  color: var(--text);
}

.lp-login-sub {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.lp-tab-row {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
}

.lp-tab,
.lp-tab-active {
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.lp-tab {
  background: var(--card);
  color: var(--text-muted);
}

.lp-tab-active {
  background: var(--gradient-1);
  color: white;
}

.lp-field-input {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  margin-bottom: 16px;
  font-size: 15px;
  transition: border-color 0.3s ease;
}

.lp-field-input:focus {
  outline: none;
  border-color: var(--accent);
}

.lp-login-btn {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: var(--gradient-1);
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  transition: all 0.3s ease;
}

.lp-login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.lp-success {
  text-align: center;
  color: var(--accent);
  margin-bottom: 16px;
  font-weight: 500;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .lp-nav {
    padding: 16px 20px;
  }
  
  .lp-nav-links {
    display: none;
  }
  
  .lp-hero {
    padding: 100px 20px 60px;
  }
  
  .lp-title {
    font-size: clamp(36px, 6vw, 48px);
  }
  
  .lp-sub {
    font-size: 16px;
  }
  
  .lp-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .lp-trust-badges {
    flex-direction: column;
    gap: 16px;
  }
  
  .lp-stats-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .lp-feature-grid {
    grid-template-columns: 1fr;
  }
  
  .lp-cta {
    flex-direction: column;
    text-align: center;
  }
  
  .cta-visual {
    display: none;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .lp-login-card {
    width: 90%;
    max-width: 360px;
  }
}

@media (max-width: 480px) {
  .lp-stats-inner {
    grid-template-columns: 1fr;
  }
}
`;

export default landingStyles;
