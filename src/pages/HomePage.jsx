import { Link } from 'react-router-dom';
import { chapters } from '../data/chapters';
import './HomePage.css';

export function HomePage() {
  const startSlug = chapters[0]?.slug ?? 'ch-01';

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__glow" aria-hidden />
        <div className="home-hero__inner">
          <p className="home-hero__badge">React 19 · Vite · TaskFlow curriculum</p>
          <h1 className="home-hero__title">
            Learn React the way
            <span className="home-hero__accent"> teams ship </span>
            real products.
          </h1>
          <p className="home-hero__lead">
            Reactor starts with <strong>Phase 0</strong> in very simple English: how the browser shows a page, then why
            React was invented. After that you follow the TaskFlow lessons step by step.
          </p>
          <div className="home-hero__actions">
            <Link to={`/learn/${startSlug}`} className="home-btn home-btn--primary">
              Start learning
            </Link>
            <Link to="/assignment" className="home-btn home-btn--ghost">
              View assignments
            </Link>
          </div>
          <dl className="home-stats">
            <div>
              <dt>Chapters</dt>
              <dd>{chapters.length}</dd>
            </div>
            <div>
              <dt>Project spine</dt>
              <dd>TaskFlow</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>React 19</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="home-band">
        <div className="home-band__inner">
          <h2>Why this landing pattern works</h2>
          <p>
            Strong learning products borrow from modern SaaS marketing: a hero with a single promise, proof points,
            and a low-friction primary action. Reactor keeps the narrative focused—build muscle memory in small,
            shippable slices instead of drowning in theory.
          </p>
        </div>
      </section>

      <section className="home-features">
        <article>
          <h3>Sidebar curriculum</h3>
          <p>Every lesson in the sidebar—including Phase 0—uses the same order: simple words first, then code when it helps.</p>
        </article>
        <article>
          <h3>Split practice view</h3>
          <p>Each topic ships with a live mini UI and a commented code reference so beginners connect syntax to
            outcomes.</p>
        </article>
        <article>
          <h3>Assignments that stick</h3>
          <p>Mini challenges after every chapter reinforce the TaskFlow product narrative without leaving the app.</p>
        </article>
      </section>

      <section className="home-cta">
        <div>
          <h2>Ready for the TaskFlow build?</h2>
          <p>Open Learn React and keep the sidebar handy—you will revisit these patterns in every real repo.</p>
        </div>
        <Link to={`/learn/${startSlug}`} className="home-btn home-btn--primary">
          Open the first lesson
        </Link>
      </section>
    </div>
  );
}
