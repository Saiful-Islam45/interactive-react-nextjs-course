import { ChapterDemo } from '../demos/ChapterDemos';
import './SplitLesson.css';

export function SplitLesson({ chapter }) {
  const showCode = !chapter.hideCode && chapter.code;

  return (
    <article className="split-lesson">
      <header className="split-lesson__head">
        <p className="split-lesson__phase">{chapter.phase}</p>
        <h1>
          {chapter.navLabel ? (
            <>
              Warm-up {chapter.navLabel} — {chapter.title}
            </>
          ) : (
            <>
              Chapter {chapter.number}: {chapter.title}
            </>
          )}
        </h1>
      </header>

      {chapter.heroImage ? (
        <figure className="split-lesson__hero">
          <img src={chapter.heroImage} alt={chapter.heroAlt ?? ''} loading="lazy" />
          {chapter.heroCaption ? <figcaption>{chapter.heroCaption}</figcaption> : null}
        </figure>
      ) : null}

      {chapter.theorySections?.length ? (
        <div className="split-lesson__sections" aria-label="Lesson sections">
          {chapter.theorySections.map((sec) => (
            <section key={sec.title} className="split-lesson__subtheory">
              <h2 className="split-lesson__subtheory-title">{sec.title}</h2>
              <ul>
                {sec.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <section className="split-lesson__theory" aria-labelledby="theory-heading">
          <h2 id="theory-heading" className="sr-only">
            Key ideas
          </h2>
          <ul>
            {chapter.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>
      )}

      <div className={showCode ? 'split-lesson__grid' : 'split-lesson__grid split-lesson__grid--single'}>
        <section className="split-lesson__panel split-lesson__panel--preview" aria-labelledby="preview-heading">
          <div className="split-lesson__panel-head">
            <h2 id="preview-heading">{chapter.hideCode ? 'Small example (click)' : 'Live UI'}</h2>
            <span className="split-lesson__tag">
              {chapter.hideCode ? 'No code — read and click' : chapter.navLabel ? 'Story + play' : 'Interactive'}
            </span>
          </div>
          <div className="split-lesson__preview">
            <ChapterDemo slug={chapter.slug} />
          </div>
        </section>

        {showCode ? (
          <section className="split-lesson__panel split-lesson__panel--code" aria-labelledby="code-heading">
            <div className="split-lesson__panel-head">
              <h2 id="code-heading">Code</h2>
              <span className="split-lesson__tag">Reference</span>
            </div>
            <pre className="split-lesson__code">
              <code>{chapter.code}</code>
            </pre>
          </section>
        ) : null}
      </div>

      {chapter.challenge ? (
        <aside className="split-lesson__challenge">
          <strong>Mini challenge.</strong> {chapter.challenge}
        </aside>
      ) : null}
    </article>
  );
}
