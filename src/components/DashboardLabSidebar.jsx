import { NavLink } from 'react-router-dom';
import { dashboardLabChapters } from '../data/dashboardLabChapters';
import './CourseSidebar.css';

export function DashboardLabSidebar() {
  const groups = dashboardLabChapters.reduce((acc, ch) => {
    if (!acc[ch.phase]) acc[ch.phase] = [];
    acc[ch.phase].push(ch);
    return acc;
  }, {});

  return (
    <aside className="course-sidebar" aria-label="Dashboard lab steps">
      <p className="course-sidebar__eyebrow">Next.js Learn</p>
      <h2 className="course-sidebar__title">Dashboard lab</h2>
      <p className="course-sidebar__hint">Lessons here are primary; each step ends with optional extra reading.</p>
      {Object.entries(groups).map(([phase, items]) => (
        <div key={phase} className="course-sidebar__group">
          <p className="course-sidebar__phase">{phase}</p>
          <ul>
            {items.map((ch) => (
              <li key={ch.slug}>
                <NavLink
                  to={`/dashboard-lab/${ch.slug}`}
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
