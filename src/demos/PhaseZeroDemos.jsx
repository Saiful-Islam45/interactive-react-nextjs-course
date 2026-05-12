import { useMemo, useState } from 'react';

const PIPELINE = [
  {
    id: 'dns',
    label: '1 · Find the server',
    body: 'DNS is like a phone book. The URL is a name. DNS gives the IP number. No IP number = no connection.',
  },
  {
    id: 'http',
    label: '2 · Get files',
    body: 'The browser opens a safe connection. Then it asks the server for HTML, CSS, and JS files.',
  },
  {
    id: 'dom',
    label: '3 · DOM + CSSOM',
    body: 'HTML becomes a tree called the DOM. CSS becomes the CSSOM (which rules go where). Both must match before drawing.',
  },
  {
    id: 'render',
    label: '4 · Render tree',
    body: 'The browser mixes DOM + CSSOM into a Render Tree. Only visible parts stay. Hidden parts often drop out.',
  },
  {
    id: 'layout',
    label: '5 · Layout',
    body: 'The browser measures every box: width, height, line breaks. Doing this in a bad loop makes the page slow.',
  },
  {
    id: 'paint',
    label: '6 · Paint',
    body: 'Now the screen really updates: text, colours, images. This is what users feel as “the page is ready”.',
  },
];

/** Warm-up 0.1 — simple step-by-step next to your diagram */
export function BrowserJourneyDemo() {
  const [step, setStep] = useState(0);
  const active = PIPELINE[step];

  const hint = useMemo(() => {
    if (step < 3) return 'Match this part with the yellow boxes in your picture.';
    if (step === 3) return 'This step is the white “Render Tree” box in your picture.';
    return 'These last steps are Layout and Paint on the right side of your picture.';
  }, [step]);

  return (
    <div className="phase0-demo">
      <div className="phase0-demo__panel">
        <p className="phase0-demo__kicker">Press “Next” slowly. Read each line like you are teaching a friend.</p>
        <div className="phase0-stepper">
          <div className="phase0-stepper__rail" aria-hidden>
            {PIPELINE.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`phase0-stepper__dot ${i === step ? 'is-active' : ''} ${i < step ? 'is-done' : ''}`}
                onClick={() => setStep(i)}
                title={s.label}
              />
            ))}
          </div>
          <div className="phase0-stepper__card">
            <h4>{active.label}</h4>
            <p>{active.body}</p>
            <p className="phase0-demo__hint">{hint}</p>
            <div className="phase0-stepper__actions">
              <button type="button" className="demo-btn demo-btn--ghost" onClick={() => setStep((s) => Math.max(0, s - 1))}>
                Previous
              </button>
              <button
                type="button"
                className="demo-btn demo-btn--primary"
                onClick={() => setStep((s) => Math.min(PIPELINE.length - 1, s + 1))}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <p className="phase0-demo__diagram-note">Look again at the big picture at the top of this lesson while you click.</p>
      </div>
    </div>
  );
}

const OLD_FLOW = [
  { step: 1, label: 'Server', text: 'Sends HTML file to the browser.' },
  { step: 2, label: 'Browser', text: 'Draws the first page on screen.' },
  { step: 3, label: 'JavaScript', text: 'Waits for click or API data.' },
  { step: 4, label: 'DOM by hand', text: 'Code finds tags and changes them directly.' },
];

/** Warm-up 0.2 — four simple steps */
export function OldWebsitesWorkedDemo() {
  return (
    <div className="phase0-oldflow">
      <p className="phase0-oldflow__intro">Read from top to bottom. This was the normal pattern for many years.</p>
      <ol className="phase0-oldflow__list">
        {OLD_FLOW.map((item) => (
          <li key={item.step} className="phase0-oldflow__row">
            <span className="phase0-oldflow__num">{item.step}</span>
            <div>
              <strong>{item.label}</strong>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const PROBLEM_CARDS = [
  { id: 'p1', title: 'Who changed this?', text: 'Hard to find which line updated one part of the screen.' },
  { id: 'p2', title: 'Data everywhere', text: 'Globals, random variables, and the DOM all store state.' },
  { id: 'p3', title: 'Slow loops', text: 'Read size → change style → read again in a loop = heavy work.' },
  { id: 'p4', title: 'HTML vs CSS drift', text: 'Long HTML strings do not match CSS someone else edited.' },
  { id: 'p5', title: 'Big team fear', text: 'Many people touch the same page. People stop fixing small bugs.' },
];

/** Warm-up 0.3 — tap each card */
export function LegacyProblemsDemo() {
  const [open, setOpen] = useState(null);
  return (
    <div className="phase0-problems">
      <p className="phase0-problems__intro">Tap a card to open it. Tap again to close.</p>
      <ul className="phase0-problems__list">
        {PROBLEM_CARDS.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              className={`phase0-problems__card ${open === p.id ? 'is-open' : ''}`}
              onClick={() => setOpen((cur) => (cur === p.id ? null : p.id))}
            >
              <span className="phase0-problems__title">{p.title}</span>
              {open === p.id ? <span className="phase0-problems__body">{p.text}</span> : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Old vs React — used inside warm-up 0.4 */
function LegacyVsReactCompareDemo() {
  const [mode, setMode] = useState('legacy');

  return (
    <div className="phase0-legacy">
      <div className="phase0-legacy__toggle" role="tablist" aria-label="Compare two styles">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'legacy'}
          className={mode === 'legacy' ? 'is-active' : ''}
          onClick={() => setMode('legacy')}
        >
          Old style website
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'react'}
          className={mode === 'react' ? 'is-active' : ''}
          onClick={() => setMode('react')}
        >
          React style website
        </button>
      </div>

      {mode === 'legacy' ? (
        <div className="phase0-legacy__card">
          <h4>Many people change the same page by hand</h4>
          <p>
            Code finds one HTML node, then changes it. Another file does the same. After some months nobody remembers
            the full story. One small change can break another place.
          </p>
          <ul>
            <li>Data is inside variables, globals, and inside the HTML tree — messy.</li>
            <li>Hard question: who changed this button last?</li>
            <li>Read size from the page, then change style, then read again in a loop = very slow.</li>
          </ul>
        </div>
      ) : (
        <div className="phase0-legacy__card phase0-legacy__card--react">
          <h4>React: first decide data, then draw the screen</h4>
          <p>
            You keep state in one clear place. The UI is a picture of that state. React updates only the parts of the
            real page that really changed.
          </p>
          <ul>
            <li>Easier for a team: everyone reads the same pattern.</li>
            <li>Less random DOM surgery — fewer surprise bugs.</li>
            <li>Later you learn hooks for timing (fetch, timers, etc.).</li>
          </ul>
        </div>
      )}

      <blockquote className="phase0-legacy__quote">
        Simple picture: React is not magic speed. It is a <strong>clear system</strong> so many developers do not step
        on each other’s feet when the product grows.
      </blockquote>
    </div>
  );
}

/** Warm-up 0.4 — story + compare */
export function FacebookReactStoryDemo() {
  return (
    <div className="phase0-story-page">
      <div className="phase0-story-beats" aria-label="Short story of React in plain English">
        <h4 className="phase0-story-beats__title">Very short history (you do not need dates for exams)</h4>
        <ol>
          <li>Facebook’s page had many moving parts and many engineers.</li>
          <li>Hand-made DOM changes for every feature stopped working safely.</li>
          <li>Jordan Walke built an early version — small UI blocks tied to data.</li>
          <li>2013: Facebook gave React to everyone as open source.</li>
        </ol>
      </div>
      <p className="phase0-story-page__bridge">Then compare: old page style vs React style (same idea as the lesson text above).</p>
      <LegacyVsReactCompareDemo />
    </div>
  );
}
