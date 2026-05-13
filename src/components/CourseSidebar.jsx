import { NavLink } from 'react-router-dom';
import { chapters } from '../data/chapters';
import './CourseSidebar.css';

export function CourseSidebar() {
  const groups = chapters.reduce((acc, ch) => {
    if (!acc[ch.phase]) acc[ch.phase] = [];
    acc[ch.phase].push(ch);
    return acc;
  }, {});

  return (
    <aside className="course-sidebar" aria-label="Course chapters">
      <p className="course-sidebar__eyebrow">Curriculum · same order as react.dev Learn</p>
      <h2 className="course-sidebar__title">Lessons</h2>
      {Object.entries(groups).map(([phase, items]) => (
        <div key={phase} className="course-sidebar__group">
          <p className="course-sidebar__phase">{phase}</p>
          <ul>
            {items.map((ch) => (
              <li key={ch.slug}>
                <NavLink
                  to={`/learn/${ch.slug}`}
                  className={({ isActive }) =>
                    isActive ? 'course-sidebar__link active' : 'course-sidebar__link'
                  }
                >
                  <span className="course-sidebar__num">{ch.navLabel ?? String(ch.number).padStart(2, '0')}</span>
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
