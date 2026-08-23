import { useEffect } from 'react';
import {
  ArrowLeft,
  Camera,
  Clock,
  Database,
  Link2,
  MapPin,
  Power,
  TriangleAlert,
  Workflow,
} from 'lucide-react';
import './SetupPage.css';
import { LeoIcon, NotionLogo, TelegramLogo } from './icons.jsx';
import { handleNavClick } from './navigate.js';
import Footer from './Footer.jsx';

const STEPS = [
  {
    number: '01',
    title: 'Copy the task database',
    icon: <NotionLogo />,
    tone: 'notion',
    body: (
      <>
        Click <strong>Duplicate</strong> on the Leo template. You get a Notion database with the
        exact columns Leo expects. Then open it → <code>•••</code> → <code>Connections</code> →
        add your Notion integration.
      </>
    ),
    shot: 'the Connections menu with the integration attached.',
  },
  {
    number: '02',
    title: 'Make your bot',
    icon: <TelegramLogo />,
    tone: 'telegram',
    body: (
      <>
        Message <code>@BotFather</code> on Telegram, send <code>/newbot</code>, pick a name. He
        hands you a token. Open your new bot and press <strong>Start</strong> — Telegram blocks
        bots from messaging you first.
      </>
    ),
    shot: 'the BotFather reply, token blurred.',
  },
  {
    number: '03',
    title: 'Import Leo',
    icon: <Workflow size={18} />,
    tone: 'n8n',
    body: (
      <>
        In n8n: <code>Workflows → ⋯ → Import from File</code>. Drop in <code>leo.json</code>.
      </>
    ),
    shot: 'the full canvas, banded and labeled.',
  },
  {
    number: '04',
    title: 'Connect your accounts',
    icon: <Link2 size={18} />,
    tone: 'link',
    body: (
      <>
        Add credentials for <strong>Telegram</strong>, <strong>Notion</strong>, and{' '}
        <strong>OpenRouter</strong>. Gmail, Calendar, and voice are optional — skip any you don't
        want.
      </>
    ),
    shot: 'the credentials list.',
  },
  {
    number: '05',
    title: 'Point Leo at your database',
    icon: <Database size={18} />,
    tone: 'database',
    body: (
      <>
        Open each of the four Notion nodes and pick your task database from the{' '}
        <code>Data Source</code> dropdown. Imported workflows always land with this field empty.
      </>
    ),
    shot: 'the Data Source dropdown, open.',
  },
  {
    number: '06',
    title: 'Tell Leo where to find you',
    icon: <MapPin size={18} />,
    tone: 'mappin',
    body: (
      <>
        Message <code>@userinfobot</code> for your chat ID. Paste it into the two scheduled
        nodes. Leo's replies need no setup — he answers whoever wrote to him.
      </>
    ),
    shot: null,
  },
  {
    number: '07',
    title: 'Set your timezone',
    icon: <Clock size={18} />,
    tone: 'clock',
    body: (
      <>
        <code>Workflow Settings → Timezone</code>. Every schedule and every due date depends on
        this one field.
      </>
    ),
    shot: null,
  },
  {
    number: '08',
    title: 'Switch it on',
    icon: <Power size={18} />,
    tone: 'power',
    body: (
      <>
        Hit <strong>Activate</strong>. Then message your bot: <code>hey</code>.
      </>
    ),
    shot: "Leo's first reply in Telegram.",
  },
];

const GOTCHAS = [
  "Connecting the integration to your workspace isn't enough — it has to be connected to the database itself, or Leo authenticates fine and finds nothing.",
  'Activate with the toggle, not the Execute button. The Telegram trigger only starts listening once the workflow is live.',
];

function SetupPage() {
  useEffect(() => {
    document.title = 'Setup · leo';
    return () => {
      document.title = 'leo';
    };
  }, []);

  return (
    <div className="setup-page">
      <header className="setup-header">
        <a
          href="/"
          className="setup-logo"
          onClick={(e) => handleNavClick(e, '/')}
        >
          <LeoIcon />
          <span>leo</span>
        </a>
        <a
          href="/"
          className="setup-back"
          onClick={(e) => handleNavClick(e, '/')}
        >
          <ArrowLeft size={15} />
          Back to home
        </a>
      </header>

      <main className="setup-main">
        <div className="setup-intro">
          <span className="setup-eyebrow">SETUP GUIDE</span>
          <h1 className="setup-title">Get Leo running</h1>
          <span className="setup-time">
            <Clock size={14} />
            about 15 minutes
          </span>
        </div>

        <ol className="setup-steps">
          {STEPS.map((step, i) => (
            <li className="setup-step" key={step.number}>
              <div className="setup-step-rail">
                <span className={`setup-step-badge tone-${step.tone}`}>{step.icon}</span>
                {i < STEPS.length - 1 && <span className="setup-step-line" />}
              </div>
              <div className="setup-step-body">
                <div className="setup-step-heading">
                  <span className="setup-step-number">{step.number}</span>
                  <h2>{step.title}</h2>
                </div>
                <p className="setup-step-text">{step.body}</p>
                {step.shot && (
                  <div className="setup-shot">
                    <Camera size={15} />
                    <span>
                      Screenshot: <em>{step.shot}</em>
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <section className="setup-gotchas">
          <h2 className="setup-gotchas-title">Two things that trip people up</h2>
          <div className="setup-gotchas-grid">
            {GOTCHAS.map((text) => (
              <div className="gotcha-card" key={text.slice(0, 24)}>
                <TriangleAlert size={17} />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <a
          href="/"
          className="setup-footer-back"
          onClick={(e) => handleNavClick(e, '/')}
        >
          <ArrowLeft size={15} />
          Back to leo
        </a>
      </main>

      <Footer />
    </div>
  );
}

export default SetupPage;
