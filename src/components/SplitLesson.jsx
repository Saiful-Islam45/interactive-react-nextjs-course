import { ChapterDemo } from '../demos/ChapterDemos';
import { isRichBullet, renderBulletContent } from './lessonBullets';
import './SplitLesson.css';

function bulletItemKey(chapterSlug, bullet, index) {
  if (typeof bullet === 'string') return `${chapterSlug}-b-${index}-${bullet.slice(0, 48)}`;
  if (isRichBullet(bullet)) return `${chapterSlug}-b-${index}-rich`;
  return `${chapterSlug}-b-${index}`;
}

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
                {sec.bullets.map((b, i) => (
                  <li key={bulletItemKey(chapter.slug, b, i)}>{renderBulletContent(b)}</li>
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
            {chapter.bullets.map((b, i) => (
              <li key={bulletItemKey(chapter.slug, b, i)}>{renderBulletContent(b)}</li>
            ))}
          </ul>
        </section>
      )}

      {chapter.analogy ? (
        <aside className="split-lesson__analogy" aria-label="Real-world analogy">
          <strong className="split-lesson__callout-label">Idea in plain words.</strong> {chapter.analogy}
        </aside>
      ) : null}

      {chapter.commonMistake ? (
        <aside className="split-lesson__mistake" aria-label="Common beginner mistake">
          <strong className="split-lesson__callout-label">Watch out.</strong> {chapter.commonMistake}
        </aside>
      ) : null}

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

      {chapter.relatedDocs?.length ? (
        <footer className="split-lesson__docs" aria-label="Official React documentation">
          <p className="split-lesson__docs-title">Also read on react.dev</p>
          <ul className="split-lesson__docs-list">
            {chapter.relatedDocs.map((d) => (
              <li key={d.href}>
                <a href={d.href} target="_blank" rel="noopener noreferrer">
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      ) : null}

      {chapter.challenge ? (
        <aside className="split-lesson__challenge">
          <strong>Mini challenge.</strong> {chapter.challenge}
        </aside>
      ) : null}
    </article>
  );
}
