import { Link } from 'react-router-dom';
import { nextjsLabInteractives } from '../data/nextjsLabInteractives';
import './NextjsLabLabsHub.css';

export function NextjsLabLabsHub() {
  return (
    <div className="nextjs-lab-labs-hub">
      <header className="nextjs-lab-labs-hub__head">
        <p className="nextjs-lab-labs-hub__eyebrow">Practical labs</p>
        <h1>Progressive hands-on path</h1>
        <p className="nextjs-lab-labs-hub__lead">
          Eleven progressive workshops. Each lab is step-by-step: do the step in your own Next.js project, read the short “what this
          does” note, then copy the code block. Follow the order from scaffold → layout → pages → errors → server/client → data → API
          → revalidate → NextAuth.
        </p>
      </header>

      <div className="nextjs-lab-labs-hub__grid">
        {nextjsLabInteractives.map((lab) => (
          <article key={lab.slug} className="nextjs-lab-labs-hub__card">
            <p className="nextjs-lab-labs-hub__phase">{lab.phase}</p>
            <h2>{lab.title}</h2>
            <p>{lab.summary}</p>
            <p className="nextjs-lab-labs-hub__steps">{lab.steps?.length ?? 0} practical steps inside</p>
            <Link to={`/nextjs-lab/labs/${lab.slug}`} className="nextjs-lab-labs-hub__cta">
              Open lab
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
