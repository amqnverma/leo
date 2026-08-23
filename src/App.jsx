import { useState, useEffect } from 'react';
import './App.css';

// Leo Zodiac Pixel Art SVG
const LeoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#4454ff" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="12" width="2" height="2" />
    <rect x="7" y="10" width="2" height="2" />
    <rect x="7" y="14" width="2" height="2" />
    <rect x="9" y="12" width="2" height="2" />
    <rect x="9" y="6" width="2" height="4" />
    <rect x="11" y="4" width="4" height="2" />
    <rect x="15" y="6" width="2" height="2" />
    <rect x="17" y="8" width="2" height="4" />
    <rect x="15" y="12" width="2" height="2" />
    <rect x="13" y="14" width="2" height="4" />
    <rect x="15" y="18" width="4" height="2" />
    <rect x="19" y="14" width="2" height="4" />
  </svg>
);

// Brand logos
const GmailLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335" />
  </svg>
);

const CalendarLogo = () => (
  <svg viewBox="0 0 200 200" width="20" height="20">
    <rect width="200" height="200" rx="40" fill="#4285F4" />
    <rect x="40" y="70" width="120" height="95" rx="8" fill="white" />
    <rect x="60" y="35" width="8" height="30" rx="4" fill="white" />
    <rect x="132" y="35" width="8" height="30" rx="4" fill="white" />
    <rect x="55" y="95" width="25" height="20" rx="3" fill="#4285F4" />
    <rect x="90" y="95" width="25" height="20" rx="3" fill="#4285F4" />
    <rect x="125" y="95" width="25" height="20" rx="3" fill="#e8eaed" />
    <rect x="55" y="125" width="25" height="20" rx="3" fill="#e8eaed" />
    <rect x="90" y="125" width="25" height="20" rx="3" fill="#e8eaed" />
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 100 100" width="20" height="20">
    <path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="white" />
    <path d="M61.35.227l-55.333 4.087C.573 4.7-1.473 7.617-1.473 11.113v60.66c0 2.724.967 5.054 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113L87.223 96.08c5.437-.387 6.99-2.917 6.99-7.193V17.64c0-2.14-.58-2.723-2.467-4.117L74.167 1.14C69.893-1.973 68.147-2.363 61.35.227zM25.757 18.677c-5.92.427-7.267.523-10.64-2.14L7.997 11.073c-.87-.78-.387-1.753 1.747-1.94l53.2-3.887c4.467-.387 6.8 1.17 8.543 2.527l8.93 6.42c.387.193.967 1.36-.193 1.36l-55.2 3.307-.267-.193v.01zm-6.22 76.063V28.92c0-2.527.78-3.697 3.113-3.89l63.2-3.693c2.143-.193 3.107 1.167 3.107 3.693v65.437c0 2.53-.39 4.667-3.893 4.86l-60.553 3.5c-3.5.193-4.973-.973-4.973-3.887v-.2zm59.693-62.363c.387 1.75 0 3.5-1.75 3.7l-2.917.553v48.567c-2.527 1.36-4.853 2.137-6.8 2.137-3.107 0-3.883-.973-6.22-3.887l-19.03-29.94v28.96l6.023 1.363s0 3.5-4.857 3.5l-13.393.777c-.39-.78 0-2.723 1.357-3.11l3.497-.943v-38.3L30.82 40.333c-.39-1.75.58-4.277 3.3-4.473l14.367-.967 19.8 30.327v-26.83l-5.047-.583c-.39-2.143 1.163-3.7 3.103-3.89l14.177-.78z" fill="black" />
  </svg>
);

const TelegramLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="#229ED9" />
  </svg>
);

const VoiceLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#7C3AED" />
    <path d="M12 4a2.5 2.5 0 0 0-2.5 2.5v5a2.5 2.5 0 0 0 5 0v-5A2.5 2.5 0 0 0 12 4z" fill="white" />
    <path d="M7.5 10.5v1a4.5 4.5 0 0 0 9 0v-1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="16" x2="12" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="9.5" y1="19" x2="14.5" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CheckmarkLogo = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#22C55E" />
    <path d="M7.5 12.5l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const notifications = [
  {
    logo: <GmailLogo />,
    title: 'Email summarized',
    meta: '2 min ago',
    source: 'Gmail',
    detail: "Rhea's Q3 report highlights attached",
    bgColor: '#fce8e6',
  },
  {
    logo: <CalendarLogo />,
    title: 'Call scheduled with Vijay',
    meta: '5 min ago',
    source: 'Google Calendar',
    detail: 'Tomorrow at 3:00 PM',
    bgColor: '#e8f0fe',
  },
  {
    logo: <NotionLogo />,
    title: 'Task added',
    meta: '8 min ago',
    source: 'Notion',
    detail: 'Review PR #42 before standup',
    bgColor: '#f0f0f0',
  },
  {
    logo: <GmailLogo />,
    title: 'Digest sent',
    meta: '12 min ago',
    source: 'Gmail',
    detail: 'Morning summary delivered to inbox',
    bgColor: '#fce8e6',
  },
];

const subheadings = [
  "what's on today?",
  "what have I finished?",
  "scrape instagram by friday, low priority",
  "mark 2 as done",
  "call the vendor at 12:30 tomorrow, add to my calendar",
  "summarize the last email from Rhea",
];

const updates = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    date: "19 AUGUST 2026",
    title: "The Vana Cup: 43 Apps Built on the Context AI is Missing",
    description: "Forty-three apps, three weeks, and 18,000 people who brought their own data.",
    link: "Read ->"
  },
  {
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&q=80",
    date: "17 AUGUST 2026",
    title: "Connecting Businesses With Real Human Context in the World of Agentic Commerce",
    description: "Your agent is only as good as what it knows about you.",
    link: "Read ->"
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=80",
    date: "11 AUGUST 2026",
    title: "AI Without Context Sucks",
    description: "The best context can't be scraped. It has to be contributed.",
    link: "Read ->"
  }
];

function App() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % subheadings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <LeoIcon />
          <span>leo</span>
        </div>
        <div className="nav-links">
          <a href="#integrations">integrations</a>
          <a href="#updates">updates</a>
          <a href="#newsletter">newsletter</a>
          <a href="#signin" className="nav-signin">sign in</a>
        </div>
      </nav>

      {/* ---- HERO SECTION ---- */}
      <section className="hero-section">
        <div className="hero-grid-bg"></div>

        {/* Floating integration blocks */}
        <div className="floating-block block-notion"><NotionLogo /></div>
        <div className="floating-block block-calendar"><CalendarLogo /></div>
        <div className="floating-block block-gmail"><GmailLogo /></div>
        <div className="floating-block block-telegram"><TelegramLogo /></div>
        <div className="floating-block block-voice"><VoiceLogo /></div>
        <div className="floating-block block-checkmark"><CheckmarkLogo /></div>

        {/* Split hero content */}
        <div className="hero-split">
          {/* LEFT: heading + animated subheading ticker */}
          <div className="hero-left">
            <h1 className="hero-headline">
              Ask leo, your personal assistant for <br />
              <span className="highlight">email</span>, <span className="highlight">calendar</span> & <span className="highlight">tasks</span>
            </h1>

            <div className="subheading-ticker">
              <div
                className="subheading-track"
                style={{ transform: `translateY(-${currentLine * 36}px)` }}
              >
                {subheadings.map((line, i) => (
                  <div key={i} className="subheading-line">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: notification ticker */}
          <div className="hero-right">
            <div className="notif-ticker-wrapper">
              <div className="notif-ticker-fade-top"></div>
              <div className="notif-ticker-fade-bottom"></div>
              <div className="notif-ticker-track">
                {/* Duplicate for seamless loop */}
                {[...notifications, ...notifications].map((n, i) => (
                  <div className="notif-card" key={i}>
                    <div className="notif-logo" style={{ background: n.bgColor }}>
                      {n.logo}
                    </div>
                    <div className="notif-body">
                      <p className="notif-title">
                        <strong>{n.title}</strong> · <span className="notif-time">{n.meta}</span>
                      </p>
                      <span className="notif-detail">{n.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- INTEGRATIONS SECTION ---- */}
      <section className="feature-section" id="integrations">
        <div className="accordion-container">
          <div className="accordion-item item-1">
            <div className="accordion-header"><span>NOTION</span><span>01</span></div>
            <div className="accordion-content default-content">
              <h2 className="accordion-title">All your tasks, perfectly organized in one place.</h2>
              <div className="accordion-link">Connect Notion -&gt;</div>
            </div>
            <div className="accordion-content hover-reveal">
              <h2 className="accordion-title">Notion Sync</h2>
              <p style={{ fontSize: '1.15rem', marginTop: '1rem', opacity: 0.9 }}>Automagically log every todo right into your workspace.</p>
            </div>
          </div>
          <div className="accordion-item item-2">
            <div className="accordion-header"><span>CALENDAR</span><span>02</span></div>
            <div className="accordion-content default-content">
              <h2 className="accordion-title">Never miss a beat with smart scheduling.</h2>
              <div className="accordion-link">Sync Calendar -&gt;</div>
            </div>
            <div className="accordion-content hover-reveal">
              <h2 className="accordion-title">Google Calendar</h2>
              <p style={{ fontSize: '1.15rem', marginTop: '1rem', opacity: 0.9 }}>Add meetings and block time without opening a new tab.</p>
            </div>
          </div>
          <div className="accordion-item item-3">
            <div className="accordion-header"><span>GMAIL</span><span>03</span></div>
            <div className="accordion-content default-content">
              <h2 className="accordion-title">Your inbox summarized, every single morning.</h2>
              <div className="accordion-link">Connect Gmail -&gt;</div>
            </div>
            <div className="accordion-content hover-reveal">
              <h2 className="accordion-title">Gmail Intelligence</h2>
              <p style={{ fontSize: '1.15rem', marginTop: '1rem', opacity: 0.9 }}>Extract actions from long threads instantly.</p>
            </div>
          </div>
          <div className="accordion-item item-4">
            <div className="accordion-header"><span>DIGEST</span><span>04</span></div>
            <div className="accordion-content default-content">
              <h2 className="accordion-title">A clear daily brief to keep you focused.</h2>
              <div className="accordion-link">View Digest -&gt;</div>
            </div>
            <div className="accordion-content hover-reveal">
              <h2 className="accordion-title">Morning Digest</h2>
              <p style={{ fontSize: '1.15rem', marginTop: '1rem', opacity: 0.9 }}>Wake up to a clean list of what actually matters today.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ---- HOW IT WORKS SECTION ---- */}
      <section className="steps-section">
        <div className="steps-container">
          <div className="steps-left">
            <h2 className="steps-heading">How it works</h2>
            <p className="steps-subheading">GETTING STARTED WITH LEO</p>

            <div className="steps-list">
              <div className="step-item">
                <span className="step-number">01</span>
                <div className="step-text">
                  <h3>Connect your apps</h3>
                  <p>Link Gmail, Google Calendar, and Notion in one click. Leo securely syncs your accounts so everything lives in one place.</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">02</span>
                <div className="step-text">
                  <h3>Tell Leo what you need</h3>
                  <p>Type a natural-language command — schedule a call, summarize an email, add a task. No menus, no forms, just talk.</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">03</span>
                <div className="step-text">
                  <h3>Leo takes action</h3>
                  <p>Events get created, tasks get logged, emails get summarized — all instantly and accurately across your connected tools.</p>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">04</span>
                <div className="step-text">
                  <h3>Stay in flow</h3>
                  <p>Get a morning digest, real-time notifications, and smart reminders. Leo keeps you focused on what actually matters.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="steps-right">
            <svg className="steps-lines-svg" viewBox="0 0 400 500" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Converging lines from 4 step positions to a single focal point */}
              <line x1="0" y1="62"  x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.2" />
              <line x1="0" y1="62"  x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.15" strokeDasharray="6 4" />
              
              <line x1="0" y1="187" x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.25" />
              <line x1="0" y1="187" x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.15" strokeDasharray="6 4" />
              
              <line x1="0" y1="312" x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.25" />
              <line x1="0" y1="312" x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.15" strokeDasharray="6 4" />
              
              <line x1="0" y1="437" x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.2" />
              <line x1="0" y1="437" x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.15" strokeDasharray="6 4" />

              {/* Extra decorative arcs */}
              <path d="M 0 62 Q 190 100, 380 250" stroke="var(--primary-blue)" strokeWidth="1" opacity="0.12" />
              <path d="M 0 187 Q 200 200, 380 250" stroke="var(--primary-blue)" strokeWidth="1" opacity="0.12" />
              <path d="M 0 312 Q 200 300, 380 250" stroke="var(--primary-blue)" strokeWidth="1" opacity="0.12" />
              <path d="M 0 437 Q 190 400, 380 250" stroke="var(--primary-blue)" strokeWidth="1" opacity="0.12" />

              {/* Focal point glow */}
              <circle cx="380" cy="250" r="6" fill="var(--primary-blue)" opacity="0.8" />
              <circle cx="380" cy="250" r="14" fill="var(--primary-blue)" opacity="0.1" />
              <circle cx="380" cy="250" r="24" fill="var(--primary-blue)" opacity="0.05" />
            </svg>
          </div>
        </div>
      </section>

      {/* ---- ORBIT SHOWCASE SECTION ---- */}
      <section className="orbit-section">
        <div className="orbit-visual">
          {/* Arc lines */}
          <svg className="orbit-arcs" viewBox="0 0 700 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 340 Q 350 -40, 650 340" stroke="rgba(0,0,0,0.06)" strokeWidth="1" fill="none" />
            <path d="M 100 340 Q 350 20, 600 340" stroke="rgba(0,0,0,0.05)" strokeWidth="1" fill="none" />
            <path d="M 150 340 Q 350 80, 550 340" stroke="rgba(0,0,0,0.04)" strokeWidth="1" fill="none" />
          </svg>

          {/* Floating logo nodes */}
          <div className="orbit-node node-notion">
            <div className="orbit-node-icon"><NotionLogo /></div>
            <span className="orbit-node-badge badge-green">● synced</span>
          </div>
          <div className="orbit-node node-gmail-orbit">
            <div className="orbit-node-icon"><GmailLogo /></div>
            <span className="orbit-node-badge badge-red">3 new</span>
          </div>
          <div className="orbit-node node-cal-orbit">
            <div className="orbit-node-icon"><CalendarLogo /></div>
            <span className="orbit-node-badge badge-blue">● 12</span>
          </div>
          <div className="orbit-node node-telegram-orbit">
            <div className="orbit-node-icon"><TelegramLogo /></div>
          </div>
          <div className="orbit-node node-voice-orbit">
            <div className="orbit-node-icon"><VoiceLogo /></div>
          </div>
          <div className="orbit-node node-check-orbit">
            <div className="orbit-node-icon"><CheckmarkLogo /></div>
            <span className="orbit-node-badge badge-green">done</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="orbit-stats">
          <div className="orbit-stat">
            <span className="orbit-stat-number">500+</span>
            <span className="orbit-stat-label">Tasks Managed</span>
          </div>
          <div className="orbit-stat">
            <span className="orbit-stat-number">3</span>
            <span className="orbit-stat-label">Integrations</span>
          </div>
          <div className="orbit-stat">
            <span className="orbit-stat-number">10x</span>
            <span className="orbit-stat-label">Faster Workflow</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="orbit-heading">
          We Connect Your Entire<br />Productivity Stack
        </h2>

        {/* Category pills */}
        <div className="orbit-pills">
          <span className="orbit-pill">📧 Email Intelligence</span>
          <span className="orbit-pill">📅 Smart Scheduling</span>
          <span className="orbit-pill">✅ Task Automation</span>
          <span className="orbit-pill">📋 Daily Digest</span>
        </div>
      </section>

      {/* ---- UPDATES SECTION ---- */}
      <div className="section-divider"></div>
      <section className="updates-section" id="updates">
        <div className="updates-header">
          <h2 className="updates-title">Updates</h2>
          <a href="#blog" className="updates-link">Read the blog -&gt;</a>
        </div>
        <div className="updates-grid">
          {updates.map((update, i) => (
            <div className="update-card" key={i}>
              <div className="update-image">
                <img src={update.image} alt={update.title} />
              </div>
              <div className="update-content">
                <p className="update-date">{update.date}</p>
                <h3 className="update-heading">{update.title}</h3>
                <p className="update-desc">{update.description}</p>
                <a href="#read" className="update-read">{update.link}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- NEWSLETTER SECTION ---- */}
      <div className="section-divider"></div>
      <section className="newsletter-section">
        <h2 className="newsletter-heading">
          Freelance <span className="icon-design-value"></span> design value<br />with one email a week
        </h2>
        
        <div className="newsletter-envelope-wrapper">
          <svg className="envelope-svg" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="flap-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodOpacity="0.05" />
              </filter>
              <filter id="inner-shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="-4" stdDeviation="6" floodOpacity="0.03" />
              </filter>
            </defs>
            {/* Envelope Base / Inside */}
            <rect x="0" y="0" width="400" height="240" rx="12" fill="#f5f5f5" stroke="#e5e5e5" strokeWidth="1" />
            
            {/* Side flaps */}
            <path d="M 0 0 L 160 120 L 0 240 Z" fill="#fafafa" stroke="#eaeaea" strokeWidth="1" />
            <path d="M 400 0 L 240 120 L 400 240 Z" fill="#fafafa" stroke="#eaeaea" strokeWidth="1" />
            
            {/* Bottom flap */}
            <path d="M 0 240 L 200 110 L 400 240 Z" fill="#fff" stroke="#eaeaea" strokeWidth="1" filter="url(#inner-shadow)" />
            
            {/* Top flap */}
            <path d="M 0 0 L 200 140 L 400 0 Z" fill="#fff" stroke="#eaeaea" strokeWidth="1.5" filter="url(#flap-shadow)" strokeLinejoin="round" />
            
            <text x="200" y="210" textAnchor="middle" fill="#aaa" fontSize="13" fontWeight="500">From Designers → For Designers</text>
          </svg>
        </div>

        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your Best Email" className="newsletter-input" />
          <button type="submit" className="newsletter-btn">
            <span className="btn-icon">📨</span> Join Now
          </button>
        </form>
        <p className="newsletter-meta">👥 Join 2,500 Designers</p>
      </section>

      {/* ---- FOOTER SECTION ---- */}
      <footer className="footer-expanded">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo"><LeoIcon /> leo</h3>
            <p className="footer-tagline">A data network built for you.</p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>READ</h4>
              <a href="#blog">Blog</a>
              <a href="#docs" className="text-blue">Docs</a>
            </div>
            
            <div className="footer-col">
              <h4>FIND US</h4>
              <a href="#instagram">Instagram</a>
              <a href="#discord">Discord</a>
              <a href="#x">X</a>
              <a href="#youtube">YouTube</a>
              <a href="#github">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-enterprise">Enterprise and AI labs: <a href="#opendata" className="text-blue">OpenDataLabs -&gt;</a></p>
          <div className="footer-legal">
            <span>© 2026 Leo Foundation</span>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
            <span>support@leofoundation.org</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
