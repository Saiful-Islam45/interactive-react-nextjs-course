import { Link } from 'react-router-dom';
import { nextjsLabLectures } from '../data/nextjsLabLectures';
import './NextjsLabLecturesListPage.css';

export function NextjsLabLecturesListPage() {
  const groups = nextjsLabLectures.reduce((acc, lec) => {
    if (!acc[lec.phase]) acc[lec.phase] = [];
    acc[lec.phase].push(lec);
    return acc;
  }, {});

  return (
    <div className="nextjs-lab-lecture-list">
      <header className="nextjs-lab-lecture-list__head">
        <p className="nextjs-lab-lecture-list__eyebrow">Full syllabus</p>
        <h1>Lecture list</h1>
        <p className="nextjs-lab-lecture-list__lead">
          Each row is a micro-lesson with a hands-on line at the bottom. Open any lecture, read top to bottom, then do the task in your
          Next.js project.
        </p>
      </header>

      {Object.entries(groups).map(([phase, items]) => (
        <section key={phase} className="nextjs-lab-lecture-list__phase">
          <h2>{phase}</h2>
          <ul>
            {items.map((lec) => (
              <li key={lec.slug}>
                <Link to={`/nextjs-lab/lectures/${lec.slug}`} className="nextjs-lab-lecture-list__link">
                  <span className="nextjs-lab-lecture-list__num">Lecture {lec.displayLecture}</span>
                  <span className="nextjs-lab-lecture-list__title">{lec.title}</span>
                  <span className="nextjs-lab-lecture-list__chev" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
