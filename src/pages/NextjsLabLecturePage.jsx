import { Link, useParams } from 'react-router-dom';
import { NextjsLessonBody } from '../components/NextjsLessonBody';
import { getNextjsLabAdjacent, getNextjsLabLecture, nextjsLabLectures } from '../data/nextjsLabLectures';
import './ChapterPage.css';
import './NextjsLecturePage.css';

const firstSlug = nextjsLabLectures[0]?.slug ?? 'lab-p1-l01-what-is-nextjs';

export function NextjsLabLecturePage() {
  const { slug } = useParams();
  const lecture = getNextjsLabLecture(slug);

  if (!lecture) {
    return (
      <div className="chapter-page chapter-page--empty">
        <p>Lab lecture not found.</p>
        <Link to={`/nextjs-lab/lectures/${firstSlug}`}>Jump to the first lecture</Link>
      </div>
    );
  }

  const { prev, next } = getNextjsLabAdjacent(slug);

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
      <nav className="chapter-page__pager" aria-label="Lab lecture navigation">
        {prev ? (
          <Link to={`/nextjs-lab/lectures/${prev.slug}`} className="chapter-page__pager-link">
            ← Lecture {prev.displayLecture}: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/nextjs-lab/lectures/${next.slug}`} className="chapter-page__pager-link chapter-page__pager-link--next">
            Lecture {next.displayLecture}: {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
