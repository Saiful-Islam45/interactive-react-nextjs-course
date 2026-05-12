import { chapters } from '../data/chapters';
import './AssignmentPage.css';

export function AssignmentPage() {
  return (
    <div className="assignment-page">
      <header className="assignment-page__head">
        <h1>Assignments & mini challenges</h1>
        <p>
          Each lecture ends with a bite-sized TaskFlow-related challenge. Treat them like spaced repetition: small
          wins stack into production confidence.
        </p>
      </header>

      <ol className="assignment-page__list">
        {chapters.map((ch) => (
          <li key={ch.slug}>
            <div className="assignment-page__meta">
              <span>{ch.navLabel ? `Warm-up ${ch.navLabel}` : `Chapter ${ch.number}`}</span>
              <span>{ch.phase}</span>
            </div>
            <h2>{ch.title}</h2>
            <p className="assignment-page__task">{ch.challenge}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
