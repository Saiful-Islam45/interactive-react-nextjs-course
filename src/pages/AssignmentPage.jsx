import { chapters } from '../data/chapters';
import './AssignmentPage.css';

export function AssignmentPage() {
  return (
    <div className="assignment-page">
      <header className="assignment-page__head">
        <h1>Assignments and mini challenges</h1>
        <p>
          Each lesson ends with a small task. Do them in order. Short answers are fine. This helps you remember ideas
          when you build the TaskFlow-style app later.
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
