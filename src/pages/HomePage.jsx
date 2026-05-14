import { Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import './HomePage.css';

const REACT_LEARN = 'https://react.dev/learn';
const REACT_TTT = 'https://react.dev/learn/tutorial-tic-tac-toe';
const MDN_JS = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';
const JS_INFO = 'https://javascript.info/';

export function HomePage() {
  const startSlug = chapters[0]?.slug ?? 'ch-01';

  const phases = [
    { label: 'Phase 0', text: 'How the browser draws a page, then why React exists. Start here if React is new.' },
    { label: 'Phase 1', text: 'React basics: JSX, small components, folders, and your first Vite app.' },
    { label: 'Phase 2', text: 'Layout and look: styles, lists with keys, loading and empty screens.' },
    { label: 'Phase 3', text: 'Clicks and state: events, useState, sharing state, forms, and useEffect.' },
    { label: 'Phase 4', text: 'A bigger app: fetch data, routes, context, and useReducer.' },
    { label: 'Phase 5', text: 'Go deeper: custom hooks, speed tools, errors, and React 19 helpers.' },
    { label: 'Phase 6', text: 'Ship work: auth patterns, env vars, UI kit habits, tests, and deploy.' },
  ];

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__glow" aria-hidden />
        <div className="home-hero__inner">
          <p className="home-hero__badge">React 19 · Vite · Simple English · TaskFlow examples</p>
          <h1 className="home-hero__title">
            Learn React step by step —
            <span className="home-hero__accent"> small lessons, clear ideas</span>
          </h1>
          <p className="home-hero__lead">
            <strong>React</strong> helps you build the user interface from <strong>components</strong>. You keep data in{' '}
            <strong>state</strong> and pass data down with <strong>props</strong>. When state changes, React updates the
            screen for you. You do not fix the DOM by hand for every click.
          </p>
          <div className="home-hero__actions">
            <Link to={`/learn/${startSlug}`} className="home-btn home-btn--primary">
              Start from Phase 0
            </Link>
            <Link to="/assignment" className="home-btn home-btn--ghost">
              KenaKata capstone brief
            </Link>
            <a href={REACT_LEARN} className="home-btn home-btn--ghost" rel="noreferrer noopener" target="_blank">
              Read react.dev Learn
            </a>
          </div>
          <dl className="home-stats">
            <div>
              <dt>Lessons</dt>
              <dd>{chapters.length}</dd>
            </div>
            <div>
              <dt>Practice story</dt>
              <dd>TaskFlow</dd>
            </div>
            <div>
              <dt>Matches</dt>
              <dd>react.dev</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="home-band home-band--idea" aria-labelledby="big-idea-heading">
        <div className="home-band__inner home-band__inner--wide">
          <h2 id="big-idea-heading">The big idea (one picture in your head)</h2>
          <ol className="home-idea-steps">
            <li>You write components that return JSX (HTML-like code inside JavaScript).</li>
            <li>Props bring data in from the parent. State is data that can change inside a component.</li>
            <li>When state or props change, React runs your component again and updates the real page.</li>
          </ol>
          <p className="home-band__note">
            This is the same story as the official{' '}
            <a href={REACT_LEARN} rel="noreferrer noopener" target="_blank">
              React Learn
            </a>{' '}
            guide. Use Reactor in class, then read that page to see the same words from the React team.
          </p>
        </div>
      </section>

      <section className="home-how" aria-labelledby="how-heading">
        <div className="home-how__inner">
          <h2 id="how-heading">How to use this site</h2>
          <ol className="home-how__list">
            <li>Open a lesson. Read the short bullets in plain English.</li>
            <li>Use the <strong>Live UI</strong> panel. Click and type so you connect ideas to what you see.</li>
            <li>Do the <strong>mini challenge</strong> at the end. Keep answers short. Small wins add up.</li>
            <li>
              Open the <Link to="/assignment">Capstone assignment</Link> page for the KenaKata Next.js storefront brief;
              each lesson still has its own short warm-up at the end.
            </li>
          </ol>
        </div>
      </section>

      <section className="home-path" aria-labelledby="path-heading">
        <div className="home-path__inner">
          <h2 id="path-heading">Your learning path (seven blocks)</h2>
          <p className="home-path__intro">
            Each block matches the sidebar. You can stop after any block and still have useful skills.
          </p>
          <ol className="home-path__grid">
            {phases.map((p) => (
              <li key={p.label} className="home-path__card">
                <strong>{p.label}</strong>
                <span>{p.text}</span>
              </li>
            ))}
          </ol>
          <div className="home-path__cta">
            <Link to={`/learn/${startSlug}`} className="home-btn home-btn--primary">
              Open the first lesson
            </Link>
          </div>
        </div>
      </section>

      <section className="home-prereq" aria-labelledby="prereq-heading">
        <div className="home-prereq__inner">
          <h2 id="prereq-heading">What you should know first</h2>
          <p>
            You do not need to be an expert. You should feel okay reading small JavaScript: variables, functions,{' '}
            <code>if</code>, arrays, and <code>map</code>. If a word feels new, use{' '}
            <a href={MDN_JS} rel="noreferrer noopener" target="_blank">
              MDN JavaScript guides
            </a>{' '}
            or{' '}
            <a href={JS_INFO} rel="noreferrer noopener" target="_blank">
              javascript.info
            </a>{' '}
            for a quick refresher.
          </p>
        </div>
      </section>

      <section className="home-official" aria-labelledby="official-heading">
        <div className="home-official__inner">
          <h2 id="official-heading">Study with the official React docs</h2>
          <p>
            Reactor follows the same order as <strong>Learn React</strong> on react.dev: components, JSX, styles, data
            on screen, lists, events, state, hooks, and sharing data between components.
          </p>
          <div className="home-official__actions">
            <a href={REACT_LEARN} className="home-btn home-btn--primary" rel="noreferrer noopener" target="_blank">
              Open react.dev/learn
            </a>
            <a href={REACT_TTT} className="home-btn home-btn--ghost" rel="noreferrer noopener" target="_blank">
              Try the Tic-Tac-Toe tutorial
            </a>
          </div>
          <p className="home-official__hint">
            Tip: do the Tic-Tac-Toe tutorial in the same week as Phase 1–3. It repeats the same skills in a second
            context. That helps memory.
          </p>
        </div>
      </section>

      <section className="home-features">
        <article>
          <h3>Sidebar map</h3>
          <p>Every lesson is listed in order. Phase 0 is the warm-up. Later phases add TaskFlow-style app skills.</p>
        </article>
        <article>
          <h3>Live UI plus code</h3>
          <p>Most topics show a small interactive demo and a code sample. You see the result and the words together.</p>
        </article>
        <article>
          <h3>Links to react.dev</h3>
          <p>Many lessons show an “Also read on react.dev” line so you can match class notes to the official text.</p>
        </article>
      </section>

      <section className="home-cta">
        <div>
          <h2>Ready to begin?</h2>
          <p>Start at Phase 0 if you want the full story. If you already know the browser well, you can skip ahead.</p>
        </div>
        <Link to={`/learn/${startSlug}`} className="home-btn home-btn--primary">
          Go to Learn React
        </Link>
      </section>
    </div>
  );
}
