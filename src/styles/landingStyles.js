const landingStyles = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  /* Warm earth tones - no blue or purple */
  --cream: #faf8f5;
  --warm-white: #ffffff;
  --sage: #8b9a7d;
  --sage-light: #a8b899;
  --terracotta: #c17f59;
  --terracotta-light: #d49a7a;
  --charcoal: #2d2a26;
  --warm-gray: #6b6560;
  --light-gray: #e8e4df;
  --sand: #f5f1ec;
  --coral: #d4a574;
  --olive: #7a8b6e;
  --warm-accent: #b8734f;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--cream);
  color: var(--charcoal);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
}

@keyframes breathe {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
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
  padding: 16px 48px;
  background: rgba(250, 248, 245, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--light-gray);
}

.lp-nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: var(--charcoal);
  letter-spacing: -0.5px;
}

.logo-icon {
  font-size: 28px;
}

.logo-badge {
  background: var(--terracotta);
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 20px;
  margin-left: 6px;
  letter-spacing: 0.5px;
}

.lp-nav-links {
  display: flex;
  gap: 40px;
}

.lp-nav-link {
  font-size: 15px;
  font-weight: 500;
  color: var(--warm-gray);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.lp-nav-link:hover {
  color: var(--terracotta);
}

.lp-nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--terracotta);
  transition: width 0.3s ease;
  border-radius: 2px;
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
  font-family: inherit;
  background: var(--terracotta);
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(193, 127, 89, 0.25);
}

.lp-btn-primary:hover {
  background: var(--warm-accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(193, 127, 89, 0.35);
}

.lp-btn-ghost {
  padding: 12px 20px;
  border-radius: 12px;
  border: 1.5px solid var(--light-gray);
  color: var(--charcoal);
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.3s ease;
}

.lp-btn-ghost:hover {
  border-color: var(--sage);
  color: var(--sage);
  background: rgba(139, 154, 125, 0.05);
}

/* HERO */
.lp-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 24px 100px;
  background: linear-gradient(135deg, var(--cream) 0%, var(--sand) 50%, var(--light-gray) 100%);
  position: relative;
  overflow: hidden;
}

.lp-hero::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(212, 165, 116, 0.25) 0%, transparent 70%);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: float 8s ease-in-out infinite;
}

.lp-hero::after {
  content: '';
  position: absolute;
  bottom: -10%;
  left: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(139, 154, 125, 0.15) 0%, transparent 70%);
  border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  animation: float 10s ease-in-out infinite reverse;
}

.lp-hero-content {
  max-width: 750px;
  text-align: center;
  z-index: 2;
  position: relative;
}

.lp-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(139, 154, 125, 0.1);
  border: 1px solid rgba(139, 154, 125, 0.3);
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: var(--olive);
  margin-bottom: 32px;
  animation: slideIn 0.6s ease;
}

.badge-pulse {
  width: 6px;
  height: 6px;
  background: var(--sage);
  border-radius: 50%;
  animation: breathe 2s ease-in-out infinite;
}

.lp-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 600;
  line-height: 1.15;
  margin-bottom: 24px;
  color: var(--charcoal);
  letter-spacing: -1px;
  animation: slideIn 0.6s ease 0.1s both;
}

.title-gradient {
  color: var(--terracotta);
  font-weight: 700;
}

.title-highlight {
  color: var(--sage);
  font-weight: 700;
}

.lp-sub {
  font-size: 18px;
  color: var(--warm-gray);
  max-width: 550px;
  margin: 0 auto 36px;
  line-height: 1.7;
  animation: slideIn 0.6s ease 0.2s both;
}

.lp-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: slideIn 0.6s ease 0.3s both;
}

.lp-btn-hero {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  font-family: inherit;
  background: var(--terracotta);
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(193, 127, 89, 0.3);
}

.lp-btn-hero:hover {
  background: var(--warm-accent);
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(193, 127, 89, 0.4);
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
  border-radius: 14px;
  border: 1.5px solid var(--light-gray);
  background: rgba(255, 255, 255, 0.6);
  color: var(--charcoal);
  cursor: pointer;
  font-weight: 500;
  font-family: inherit;
  font-size: 16px;
  transition: all 0.3s ease;
}

.lp-btn-hero-ghost:hover {
  border-color: var(--sage);
  color: var(--sage);
  background: rgba(139, 154, 125, 0.08);
}

.lp-trust-badges {
  display: flex;
  gap: 32px;
  justify-content: center;
  margin-top: 48px;
  animation: slideIn 0.6s ease 0.4s both;
}

.trust-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--warm-gray);
}

.trust-icon {
  font-size: 16px;
}

/* STATS */
.lp-stats {
  padding: 80px 24px;
  background: var(--sand);
}

.lp-stats-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.stat-card {
  text-align: center;
  padding: 28px 20px;
  background: white;
  border-radius: 20px;
  border: 1px solid var(--light-gray);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--sage);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.stat-icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.stat-num {
  font-size: 36px;
  font-weight: 700;
  color: var(--terracotta);
  margin-bottom: 6px;
  font-family: 'Space Grotesk', sans-serif;
}

.stat-label {
  font-size: 14px;
  color: var(--warm-gray);
}

/* FEATURES */
.lp-features {
  padding: 100px 24px;
  max-width: 1100px;
  margin: 0 auto;
  background: var(--cream);
}

.lp-section-label {
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--sage);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.lp-section-title {
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 48px;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--charcoal);
  letter-spacing: -0.5px;
}

.lp-feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.lp-feature-card {
  padding: 32px;
  background: white;
  border-radius: 24px;
  border: 1px solid var(--light-gray);
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
  height: 3px;
  background: var(--terracotta);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.lp-feature-card:hover::before {
  transform: scaleX(1);
}

.lp-feature-card:hover {
  transform: translateY(-6px);
  border-color: var(--coral);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.lp-feature-icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.lp-feature-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 26px;
  background: var(--sand);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04);
}

.lp-feature-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  color: var(--charcoal);
}

.lp-feature-desc {
  font-size: 15px;
  color: var(--warm-gray);
  line-height: 1.6;
  text-align: center;
}

/* CTA */
.lp-cta {
  padding: 100px 24px;
  background: var(--sand);
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 32px;
}

.cta-badge {
  display: inline-block;
  padding: 6px 14px;
  background: rgba(193, 127, 89, 0.1);
  border: 1px solid rgba(193, 127, 89, 0.3);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: var(--terracotta);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.lp-cta-title {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 16px;
  font-family: 'Space Grotesk', sans-serif;
  color: var(--charcoal);
  letter-spacing: -0.5px;
}

.cta-highlight {
  color: var(--terracotta);
  font-weight: 700;
}

.lp-cta-sub {
  font-size: 17px;
  color: var(--warm-gray);
  margin-bottom: 32px;
  line-height: 1.6;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cta-guarantee {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--warm-gray);
}

.guarantee-icon {
  color: var(--sage);
  font-weight: bold;
}

.cta-visual {
  display: none;
}

/* FOOTER */
.lp-footer {
  background: var(--charcoal);
  padding: 60px 40px 30px;
  margin-top: 80px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 60px;
  max-width: 1100px;
  margin: 0 auto 40px;
}

.footer-brand {
  max-width: 280px;
}

.lp-footer-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: var(--cream);
  margin-bottom: 14px;
}

.footer-desc {
  color: rgba(250, 248, 245, 0.7);
  line-height: 1.6;
  font-size: 15px;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(250, 248, 245, 0.1);
  border: 1px solid rgba(250, 248, 245, 0.2);
  border-radius: 10px;
  color: var(--cream);
  text-decoration: none;
  transition: all 0.3s ease;
  font-family: monospace;
  font-weight: bold;
  font-size: 14px;
}

.social-link:hover {
  background: var(--terracotta);
  border-color: var(--terracotta);
  transform: translateY(-2px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.link-group h4 {
  font-size: 14px;
  font-weight: 600;
  color: var(--cream);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.link-group a {
  display: block;
  color: rgba(250, 248, 245, 0.6);
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--terracotta-light);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(250, 248, 245, 0.15);
  max-width: 1100px;
  margin: 0 auto;
}

.lp-footer-copy {
  color: rgba(250, 248, 245, 0.5);
  font-size: 14px;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal a {
  color: rgba(250, 248, 245, 0.5);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: var(--terracotta-light);
}

/* AUTH MODAL */
.lp-overlay {
  position: fixed;
  inset: 0;
  background: rgba(45, 42, 38, 0.7);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.lp-login-card {
  background: var(--cream);
  padding: 40px;
  border-radius: 24px;
  width: 380px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--light-gray);
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
  color: var(--warm-gray);
  cursor: pointer;
  transition: color 0.3s ease;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.lp-close-btn:hover {
  color: var(--charcoal);
  background: var(--light-gray);
}

.lp-login-logo {
  text-align: center;
  font-weight: 600;
  margin-bottom: 6px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 26px;
  color: var(--charcoal);
}

.lp-login-sub {
  text-align: center;
  color: var(--warm-gray);
  margin-bottom: 28px;
  font-size: 15px;
}

.lp-tab-row {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  background: var(--light-gray);
  padding: 4px;
  border-radius: 12px;
}

.lp-tab,
.lp-tab-active {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: inherit;
  font-size: 14px;
}

.lp-tab {
  background: transparent;
  color: var(--warm-gray);
}

.lp-tab-active {
  background: white;
  color: var(--charcoal);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.lp-field-input {
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1.5px solid var(--light-gray);
  background: white;
  color: var(--charcoal);
  margin-bottom: 16px;
  font-size: 15px;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.lp-field-input:focus {
  outline: none;
  border-color: var(--sage);
}

.lp-login-btn {
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: var(--terracotta);
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(193, 127, 89, 0.3);
}

.lp-login-btn:hover {
  background: var(--warm-accent);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(193, 127, 89, 0.4);
}

.lp-success {
  text-align: center;
  color: var(--sage);
  margin-bottom: 16px;
  font-weight: 500;
}

/* NEW LANDING PAGE STYLES START */

.brand-icon{
  width:40px;
  height:40px;
  border-radius:12px;
  background:var(--terracotta);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
}

.chrome-badge{
  display:flex;
  align-items:center;
  gap:8px;
  padding:8px 14px;
  border-radius:999px;
  background:#fff4ed;
  border:1px solid #f1d8ca;
  color:var(--terracotta);
  font-weight:600;
}

.lp-hero-left{
  flex:1;
  max-width:620px;
}

.lp-hero-right{
  flex:1;
  display:flex;
  justify-content:center;
}

.hero-badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 16px;
  border-radius:999px;
  background:#fff4ed;
  border:1px solid #f1d8ca;
  color:var(--terracotta);
  font-weight:600;
  margin-bottom:24px;
}

.lp-trust-points{
  display:flex;
  gap:20px;
  flex-wrap:wrap;
  margin-top:28px;
}

.trust-point{
  display:flex;
  align-items:center;
  gap:8px;
}

.email-preview{
  width:100%;
  max-width:520px;
  background:#fff;
  padding:24px;
  border-radius:28px;
  box-shadow:0 20px 60px rgba(0,0,0,.08);
}

.email-preview-header{
  display:flex;
  align-items:center;
  gap:8px;
  font-weight:700;
  margin-bottom:16px;
}

.email-message{
  background:#f8f8f8;
  padding:16px;
  border-radius:14px;
  margin-bottom:16px;
}

.generated-label{
  display:flex;
  align-items:center;
  gap:8px;
  color:var(--terracotta);
  font-weight:600;
  margin-bottom:10px;
}

.reply-box{
  background:#fff4ed;
  border:1px solid #f0d8c7;
  padding:16px;
  border-radius:14px;
  margin-bottom:18px;
}

.insert-btn{
  width:100%;
  height:48px;
  border:none;
  border-radius:12px;
  background:var(--terracotta);
  color:#fff;
  font-weight:600;
  cursor:pointer;
}

.feature-icon{
  display:flex;
  justify-content:center;
  align-items:center;
  color:var(--terracotta);
  margin-bottom:16px;
}

.how-section{
  padding:100px 24px;
  max-width:1100px;
  margin:auto;
}

.steps-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
  margin-top:40px;
}

.step-card{
  background:#fff;
  border-radius:24px;
  padding:28px;
  text-align:center;
  border:1px solid var(--light-gray);
}

/* NEW LANDING PAGE STYLES END */

/* RESPONSIVE */


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
