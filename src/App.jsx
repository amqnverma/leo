import { useState, useEffect } from 'react';
import './App.css';
import { LeoIcon, GmailLogo, CalendarLogo, NotionLogo, TelegramLogo } from './icons.jsx';
import { handleNavClick } from './navigate.js';
import Footer from './Footer.jsx';

// Inline mark used inside the hero headline
const HeroTitleMark = () => (
  <span className="hero-title-mark" aria-hidden="true">
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
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
  </span>
);

// Fanned app folder used at the bottom of the hero
const HeroFolder = ({ tone, position, label, note, logo, children }) => (
  <div className={`hero-folder folder-${tone} ${position}`}>
    <div className="folder-tab"></div>
    <div className="folder-sheet"></div>
    <div className="folder-front">
      <div className="folder-head">
        <div className="folder-icon">{logo}</div>
        <div className="folder-heading">
          <span className="folder-label">{label}</span>
          <span className="folder-note">{note}</span>
        </div>
      </div>
      <div className="folder-card">{children}</div>
    </div>
  </div>
);

const orbitPills = [
  '📧 Email Intelligence',
  '📅 Smart Scheduling',
  '✅ Task Automation',
  '📋 Daily Digest',
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
    title: "I Built a Chief of Staff Out of Four Apps",
    description: "Notion, Telegram, Gmail, and Calendar, wired into one assistant that actually knows my day.",
    link: "Read ->"
  },
  {
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&q=80",
    date: "17 AUGUST 2026",
    title: "Your AI Doesn't Need a Better Model. It Needs Your Calendar.",
    description: "The smartest assistant in the world is useless if it can't see what you're already booked for.",
    link: "Read ->"
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=400&q=80",
    date: "11 AUGUST 2026",
    title: "A To-Do List Can't Hold You Accountable. This One Can.",
    description: "What changes when your task tracker gets a voice and knows where to find you.",
    link: "Read ->"
  }
];

function App() {
  const [currentLine, setCurrentLine] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('idle');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribeStatus('loading');
    try {
      await fetch('https://amanverma.app.n8n.cloud/webhook/leo-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubscribeStatus('error');
    }
  };

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
          <a href="#integrations">Integrations</a>
          <a href="/setup" onClick={(e) => handleNavClick(e, '/setup')}>Setup</a>
          <a href="#newsletter" className="nav-signin">Get Leo</a>
        </div>
      </nav>

      {/* ---- HERO SECTION ---- */}
      <section className="hero-section">
        <div className="hero-inner">
          <h1 className="hero-headline">
            One Stop Assistant <br />
            for <HeroTitleMark /> Your Entire Day.
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

          <div className="hero-buttons">
            <a href="#newsletter" className="hero-btn-primary" style={{ textDecoration: 'none' }}>Join now</a>
            <a href="/setup" className="hero-btn-secondary" style={{ textDecoration: 'none' }} onClick={(e) => handleNavClick(e, '/setup')}>Setup Leo</a>
          </div>
        </div>

        {/* Fanned folders — one per connected app */}
        <div className="hero-folders">
          <HeroFolder tone="notion" position="folder-pos-1" label="Notion" note="12 tasks synced" logo={<NotionLogo />}>
            <div className="folder-row">
              <span className="row-check done"></span>
              <span className="row-text done">Review PR #42</span>
            </div>
            <div className="folder-row">
              <span className="row-check"></span>
              <span className="row-text">Draft Q3 report</span>
              <span className="row-tag">Fri</span>
            </div>
            <div className="folder-row">
              <span className="row-check"></span>
              <span className="row-text">Scrape Instagram</span>
              <span className="row-tag low">Low</span>
            </div>
          </HeroFolder>

          <HeroFolder tone="gmail" position="folder-pos-2" label="Gmail" note="inbox summarized" logo={<GmailLogo />}>
            <div className="folder-row">
              <span className="row-dot"></span>
              <span className="row-stack">
                <span className="row-text strong">Rhea Kapoor</span>
                <span className="row-sub">Q3 report highlights</span>
              </span>
              <span className="row-tag">2m</span>
            </div>
            <div className="folder-row">
              <span className="row-dot"></span>
              <span className="row-stack">
                <span className="row-text strong">Vijay Menon</span>
                <span className="row-sub">Re: demo call</span>
              </span>
              <span className="row-tag">1h</span>
            </div>
            <div className="folder-row">
              <span className="row-dot muted"></span>
              <span className="row-stack">
                <span className="row-text">Stripe</span>
                <span className="row-sub">Payment received</span>
              </span>
            </div>
          </HeroFolder>

          <HeroFolder tone="calendar" position="folder-pos-3" label="Calendar" note="3 events today" logo={<CalendarLogo />}>
            <div className="folder-row">
              <span className="row-time">09:30</span>
              <span className="row-bar"></span>
              <span className="row-text">Daily standup</span>
            </div>
            <div className="folder-row">
              <span className="row-time">12:30</span>
              <span className="row-bar amber"></span>
              <span className="row-text">Vendor call</span>
            </div>
            <div className="folder-row">
              <span className="row-time">15:00</span>
              <span className="row-bar green"></span>
              <span className="row-text">Call with Vijay</span>
            </div>
          </HeroFolder>

          <HeroFolder tone="telegram" position="folder-pos-4" label="Telegram" note="always reachable" logo={<TelegramLogo />}>
            <div className="tg-bubble out">what&apos;s on today?</div>
            <div className="tg-bubble in">3 events, 2 tasks due</div>
            <div className="tg-bubble in">added &ldquo;call vendor&rdquo; ✓</div>
          </HeroFolder>
        </div>
      </section>

      {/* ---- INTEGRATIONS SECTION ---- */}
      <section className="feature-section" id="integrations">
        <div className="accordion-container">
          <div className="accordion-item item-1">
            <div className="accordion-header"><span>NOTION</span><span>01</span></div>
            <div className="accordion-content default-content">
              <h2 className="accordion-title">All your tasks, perfectly organized in one place.</h2>
              <div className="accordion-link">Connect Notion<span className="link-arrow"> -&gt;</span></div>
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
              <div className="accordion-link">Sync Calendar<span className="link-arrow"> -&gt;</span></div>
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
              <div className="accordion-link">Connect Gmail<span className="link-arrow"> -&gt;</span></div>
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
              <div className="accordion-link">View Digest<span className="link-arrow"> -&gt;</span></div>
            </div>
            <div className="accordion-content hover-reveal">
              <h2 className="accordion-title">Morning Digest</h2>
              <p style={{ fontSize: '1.15rem', marginTop: '1rem', opacity: 0.9 }}>Wake up to a clean list of what actually matters today.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ---- BRAIN / STICKY NOTES SECTION ---- */}
      <section className="brain-section" id="brain">
        <div className="brain-stage">
          {/* Centre message */}
          <div className="brain-center">
            <h2 className="brain-heading">
              Your brain&apos;s job is to<br />brainstorm, not to store stuff.
            </h2>
            <div className="brain-prompt" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="3" width="6" height="10" rx="3" fill="#9a9a9a" />
                <path d="M6 11v.5a6 6 0 0 0 12 0V11" stroke="#9a9a9a" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M12 17.5V20" stroke="#9a9a9a" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span>say it once — leo remembers the rest</span>
            </div>
          </div>

          {/* Faint margin notes */}
          <span className="brain-scribble scribble-1">no more mental tabs</span>
          <span className="brain-scribble scribble-2">fully hands-free</span>

          {/* Sticky notes */}
          <article className="sticky-note note-impact">
            <span className="note-tag">IMPACT</span>
            <h3 className="note-title">Productivity</h3>
            <div className="note-stat">
              <span className="note-stat-value">+25%</span>
              <span className="note-badge">Faster</span>
            </div>
            <p className="note-desc">More output every week, without adding hours to your day.</p>
            <svg className="note-spark" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 52 C 46 50, 62 40, 96 32 S 158 18, 236 8" stroke="#1c8fe0" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </article>

          <article className="sticky-note note-voice">
            <span className="note-tag">VOICE</span>
            <h3 className="note-title">Just Say It</h3>
            <p className="note-desc">Ramble into your phone. Leo files it properly.</p>
            <span className="note-wave" aria-hidden="true">
              <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            </span>
          </article>

          <article className="sticky-note note-channels">
            <span className="note-tag">PLATFORM</span>
            <h3 className="note-title">Multi-Channel</h3>
            <p className="note-desc">One assistant across every app you already live in.</p>
            <div className="note-logos">
              <span className="note-logo"><NotionLogo /></span>
              <span className="note-logo"><GmailLogo /></span>
              <span className="note-logo"><CalendarLogo /></span>
              <span className="note-logo"><TelegramLogo /></span>
            </div>
          </article>

          <article className="sticky-note note-system">
            <span className="note-tag">SYSTEM</span>
            <h3 className="note-title">Don&apos;t Just Store It</h3>
            <p className="note-desc">Leo ranks what matters and puts it back in front of you.</p>
            <div className="note-priority">
              <div className="priority-row">
                <span className="priority-rank high">1</span>
                <span className="priority-text">Send Rhea the Q3 deck</span>
              </div>
              <div className="priority-row">
                <span className="priority-rank mid">2</span>
                <span className="priority-text">Confirm vendor call</span>
              </div>
              <div className="priority-row">
                <span className="priority-rank low">3</span>
                <span className="priority-text">Scrape Instagram</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ---- HOW IT WORKS SECTION ---- */}
      <section className="steps-section" id="how-it-works">
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
                  <p>Type or speak a command in natural language — schedule a call, summarize an email, add a task. No menus, no forms, just talk.</p>
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
              <line x1="0" y1="62" x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.2" />
              <line x1="0" y1="62" x2="380" y2="250" stroke="var(--primary-blue)" strokeWidth="1.2" opacity="0.15" strokeDasharray="6 4" />

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
        {/* Stats row */}
        <div className="orbit-stats">
          <div className="orbit-stat">
            <span className="orbit-stat-number">5000+</span>
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
          Connect Your Entire<br />Productivity Stack
        </h2>

        {/* Category pills — duplicated so the mobile marquee loops seamlessly */}
        <div className="orbit-pills">
          <div className="orbit-pills-track">
            {orbitPills.map((label) => (
              <span className="orbit-pill" key={label}>{label}</span>
            ))}
            {orbitPills.map((label) => (
              <span className="orbit-pill" aria-hidden="true" key={`${label}-dup`}>{label}</span>
            ))}
          </div>
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
      <section className="newsletter-section" id="newsletter">
        <h2 className="newsletter-heading">
          Drop your email <span className="icon-design-value"></span>and get the exact workflow, I'm running.
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

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            placeholder="Your Best Email" 
            className="newsletter-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
            required
          />
          <button type="submit" className="newsletter-btn" disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}>
            <span className="btn-icon">📨</span> {subscribeStatus === 'loading' ? 'Joining...' : 'Get Leo'}
          </button>
        </form>
        {subscribeStatus === 'success' ? (
          <p className="newsletter-meta" style={{ color: '#16a34a', fontWeight: '500', maxWidth: '400px', margin: '0 auto' }}>
            Thank you - the n8n template for Leo has been delivered to your Email, if not recieved check spam folder
          </p>
        ) : (
          <p className="newsletter-meta">👥 Join 240+ Engineers</p>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;
