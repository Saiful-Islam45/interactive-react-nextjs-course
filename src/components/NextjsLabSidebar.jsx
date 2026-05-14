import { NavLink } from 'react-router-dom';
import { nextjsLabInteractives } from '../data/nextjsLabInteractives';
// import { nextjsLabLectures } from '../data/nextjsLabLectures';
import './NextjsLabSidebar.css';

// const dash = ({ isActive }) => (isActive ? 'nextjs-lab-sidebar__pill is-active' : 'nextjs-lab-sidebar__pill');
const sub = ({ isActive }) => (isActive ? 'nextjs-lab-sidebar__link active' : 'nextjs-lab-sidebar__link');

export function NextjsLabSidebar() {
  // const { pathname } = useLocation();
  // const groups = nextjsLabLectures.reduce((acc, lec) => {
  //   if (!acc[lec.phase]) acc[lec.phase] = [];
  //   acc[lec.phase].push(lec);
  //   return acc;
  // }, {});

  return (
    <aside className="nextjs-lab-sidebar" aria-label="Next.js Lab navigation">
      <p className="nextjs-lab-sidebar__eyebrow">Next.js Lab</p>

      {/*
      <p className="nextjs-lab-sidebar__eyebrow">Next.js Lab · build a real mental model</p>
      <h2 className="nextjs-lab-sidebar__title">Menu</h2>
      <nav className="nextjs-lab-sidebar__primary" aria-label="Lab sections">
        <NavLink to="/nextjs-lab" className={dash} end>
          Learning dashboard
        </NavLink>
        <NavLink
          to="/nextjs-lab/lectures"
          className={({ isActive }) =>
            isActive || pathname.startsWith('/nextjs-lab/lectures')
              ? 'nextjs-lab-sidebar__pill is-active'
              : 'nextjs-lab-sidebar__pill'
          }
        >
          Lecture list
        </NavLink>
        <NavLink
          to="/nextjs-lab/labs"
          className={({ isActive }) =>
            isActive || pathname.startsWith('/nextjs-lab/labs')
              ? 'nextjs-lab-sidebar__pill is-active'
              : 'nextjs-lab-sidebar__pill'
          }
        >
          Practical labs
        </NavLink>
      </nav>

      <div className="nextjs-lab-sidebar__section">
        <p className="nextjs-lab-sidebar__section-title">All lectures</p>
        {Object.entries(groups).map(([phase, items]) => (
          <div key={phase} className="nextjs-lab-sidebar__group">
            <p className="nextjs-lab-sidebar__phase">{phase}</p>
            <ul>
              {items.map((lec) => (
                <li key={lec.slug}>
                  <NavLink to={`/nextjs-lab/lectures/${lec.slug}`} className={sub}>
                    <span className="nextjs-lab-sidebar__label">
                      {lec.displayLecture}. {lec.title}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      */}

      <div className="nextjs-lab-sidebar__section nextjs-lab-sidebar__section--only">
        <p className="nextjs-lab-sidebar__section-title">Progressive practical labs (1 → 11)</p>
        <ul>
          {nextjsLabInteractives.map((lab, i) => (
            <li key={lab.slug}>
              <NavLink to={`/nextjs-lab/labs/${lab.slug}`} className={sub}>
                <span className="nextjs-lab-sidebar__label">
                  {i + 1}. {lab.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
