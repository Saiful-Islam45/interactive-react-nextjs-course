import { Link, useParams } from 'react-router-dom';
import { firstNextSlug, getNextAdjacent, getNextChapter } from '../data/nextjsChapters';
import { SplitLesson } from '../components/SplitLesson';
import './ChapterPage.css';

export function NextChapterPage() {
  const { slug } = useParams();
  const chapter = getNextChapter(slug);

  if (!chapter) {
    return (
      <div className="chapter-page chapter-page--empty">
        <p>Topic not found.</p>
        <Link to={`/nextjs/${firstNextSlug}`}>Start at the first topic</Link>
      </div>
    );
  }

  const { prev, next } = getNextAdjacent(slug);

  return (
    <div className="chapter-page">
      <SplitLesson chapter={chapter} />
      <nav className="chapter-page__pager" aria-label="Topic navigation">
        {prev ? (
          <Link to={`/nextjs/${prev.slug}`} className="chapter-page__pager-link">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/nextjs/${next.slug}`} className="chapter-page__pager-link chapter-page__pager-link--next">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
