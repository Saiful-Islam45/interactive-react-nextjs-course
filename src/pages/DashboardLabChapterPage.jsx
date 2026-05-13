import { Link, useParams } from 'react-router-dom';
import {
  firstDashboardLabSlug,
  getDashboardLabAdjacent,
  getDashboardLabChapter,
} from '../data/dashboardLabChapters';
import { SplitLesson } from '../components/SplitLesson';
import './ChapterPage.css';

export function DashboardLabChapterPage() {
  const { slug } = useParams();
  const chapter = getDashboardLabChapter(slug);

  if (!chapter) {
    return (
      <div className="chapter-page chapter-page--empty">
        <p>Lab step not found.</p>
        <Link to={`/dashboard-lab/${firstDashboardLabSlug}`}>Start at overview</Link>
      </div>
    );
  }

  const { prev, next } = getDashboardLabAdjacent(slug);

  return (
    <div className="chapter-page">
      <SplitLesson chapter={chapter} />
      <nav className="chapter-page__pager" aria-label="Lab step navigation">
        {prev ? (
          <Link to={`/dashboard-lab/${prev.slug}`} className="chapter-page__pager-link">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/dashboard-lab/${next.slug}`}
            className="chapter-page__pager-link chapter-page__pager-link--next"
          >
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
