import { NavLink } from 'react-router-dom';
import { nextjsLectures } from '../data/nextjsLectures';
import './NextjsCourseSidebar.css';

export function NextjsCourseSidebar() {
  const groups = nextjsLectures.reduce((acc, lec) => {
    if (!acc[lec.phase]) acc[lec.phase] = [];
    acc[lec.phase].push(lec);
    return acc;
  }, {});

  return (
    <aside className="nextjs-course-sidebar" aria-label="Next.js lessons">
      <p className="nextjs-course-sidebar__eyebrow">Next.js · App Router path · simple English</p>
      <h2 className="nextjs-course-sidebar__title">Lessons</h2>
      {Object.entries(groups).map(([phase, items]) => (
        <div key={phase} className="nextjs-course-sidebar__group">
          <p className="nextjs-course-sidebar__phase">{phase}</p>
          <ul>
            {items.map((lec) => (
              <li key={lec.slug}>
                <NavLink
                  to={`/nextjs/${lec.slug}`}
                  className={({ isActive }) =>
                    isActive ? 'nextjs-course-sidebar__link active' : 'nextjs-course-sidebar__link'
                  }
                >
                  <span className="nextjs-course-sidebar__label">
                    Lecture {lec.displayLecture} — {lec.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
