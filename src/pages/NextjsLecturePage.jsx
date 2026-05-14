import { Link, useParams } from 'react-router-dom';
import { NextjsLessonBody } from '../components/NextjsLessonBody';
import { getNextjsAdjacent, getNextjsLecture, nextjsLectures } from '../data/nextjsLectures';
import './NextjsLecturePage.css';
import './ChapterPage.css';

const firstSlug = nextjsLectures[0]?.slug ?? 'nx-l01-why-nextjs';

export function NextjsLecturePage() {
  const { slug } = useParams();
  const lecture = getNextjsLecture(slug);

  if (!lecture) {
    return (
      <div className="chapter-page chapter-page--empty">
        <p>Lesson not found.</p>
        <Link to={`/nextjs/${firstSlug}`}>Start at the first Next.js lesson</Link>
      </div>
    );
  }

  const { prev, next } = getNextjsAdjacent(slug);

  return (
    <div className="nextjs-lecture-page chapter-page">
      <article className="nextjs-lecture-page__article">
        <header className="nextjs-lecture-page__head">
          <p className="nextjs-lecture-page__phase">{lecture.phase}</p>
          <h1 className="nextjs-lecture-page__title">
            Lecture {lecture.displayLecture} — {lecture.title}
          </h1>
          {lecture.lead ? <p className="nextjs-lecture-page__lead">{lecture.lead}</p> : null}
        </header>
        <NextjsLessonBody slug={lecture.slug} blocks={lecture.blocks} />
      </article>
      <nav className="chapter-page__pager" aria-label="Lesson navigation">
        {prev ? (
          <Link to={`/nextjs/${prev.slug}`} className="chapter-page__pager-link">
            ← Lecture {prev.displayLecture}: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/nextjs/${next.slug}`} className="chapter-page__pager-link chapter-page__pager-link--next">
            Lecture {next.displayLecture}: {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
