import { NavLink } from 'react-router-dom';
import { nextjsChapters } from '../data/nextjsChapters';
import './CourseSidebar.css';

export function NextCourseSidebar() {
  const groups = nextjsChapters.reduce((acc, ch) => {
    if (!acc[ch.phase]) acc[ch.phase] = [];
    acc[ch.phase].push(ch);
    return acc;
  }, {});

  return (
    <aside className="course-sidebar" aria-label="Next.js topics">
      <p className="course-sidebar__eyebrow">Next.js track</p>
      <h2 className="course-sidebar__title">Topics</h2>
      <p className="course-sidebar__hint">Lessons here are primary; optional extra reading is linked on each page.</p>
      {Object.entries(groups).map(([phase, items]) => (
        <div key={phase} className="course-sidebar__group">
          <p className="course-sidebar__phase">{phase}</p>
          <ul>
            {items.map((ch) => (
              <li key={ch.slug}>
                <NavLink
                  to={`/nextjs/${ch.slug}`}
                  className={({ isActive }) =>
                    isActive ? 'course-sidebar__link active' : 'course-sidebar__link'
                  }
                >
                  <span className="course-sidebar__num">{String(ch.number).padStart(2, '0')}</span>
                  <span className="course-sidebar__label">{ch.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
