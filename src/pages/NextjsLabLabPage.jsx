import { Link, useParams } from 'react-router-dom';
import { NextjsLabPracticalBody } from '../components/NextjsLabPracticalBody';
import { getNextjsLabInteractive, nextjsLabInteractives } from '../data/nextjsLabInteractives';
import './NextjsLabLabPage.css';

const first = nextjsLabInteractives[0]?.slug ?? 'lab-01-create-app';

export function NextjsLabLabPage() {
  const { slug } = useParams();
  const lab = getNextjsLabInteractive(slug);
  const index = nextjsLabInteractives.findIndex((l) => l.slug === slug);
  const prev = index > 0 ? nextjsLabInteractives[index - 1] : null;
  const next = index >= 0 && index < nextjsLabInteractives.length - 1 ? nextjsLabInteractives[index + 1] : null;

  if (!lab) {
    return (
      <div className="nextjs-lab-lab-page nextjs-lab-lab-page--empty">
        <p>Interactive lab not found.</p>
        <Link to={`/nextjs-lab/labs/${first}`}>Open the first lab</Link>
      </div>
    );
  }

  return (
    <div className="nextjs-lab-lab-page">
      <header className="nextjs-lab-lab-page__head">
        <p className="nextjs-lab-lab-page__eyebrow">{lab.phase}</p>
        <h1>{lab.title}</h1>
        <p className="nextjs-lab-lab-page__lead">{lab.summary}</p>
      </header>
      <NextjsLabPracticalBody key={lab.slug} lab={lab} />
      <nav className="nextjs-lab-lab-page__pager" aria-label="Interactive lab navigation">
        {prev ? (
          <Link to={`/nextjs-lab/labs/${prev.slug}`} className="nextjs-lab-lab-page__link">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/nextjs-lab/labs/${next.slug}`} className="nextjs-lab-lab-page__link nextjs-lab-lab-page__link--next">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
