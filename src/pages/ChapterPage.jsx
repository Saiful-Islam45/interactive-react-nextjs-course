import { Link, useParams } from 'react-router-dom';
import { chapters, getAdjacent, getChapter } from '../data/chapters';
import { SplitLesson } from '../components/SplitLesson';
import './ChapterPage.css';

export function ChapterPage() {
  const { slug } = useParams();
  const chapter = getChapter(slug);

  if (!chapter) {
    return (
      <div className="chapter-page chapter-page--empty">
        <p>Chapter not found.</p>
        <Link to={`/learn/${chapters[0]?.slug ?? 'ch-01'}`}>Start at the first lesson</Link>
      </div>
    );
  }

  const { prev, next } = getAdjacent(slug);

  return (
    <div className="chapter-page">
      <SplitLesson chapter={chapter} />
      <nav className="chapter-page__pager" aria-label="Chapter navigation">
        {prev ? (
          <Link to={`/learn/${prev.slug}`} className="chapter-page__pager-link">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/learn/${next.slug}`} className="chapter-page__pager-link chapter-page__pager-link--next">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
