import { NavLink, useLocation } from 'react-router-dom';
import { chapters } from '../data/chapters';
import { firstDashboardLabSlug } from '../data/dashboardLabChapters';
import { firstNextSlug } from '../data/nextjsChapters';
import './AppHeader.css';

const learnEntry = chapters[0]?.slug ?? 'ch-01';

const base = 'app-header__link';
const active = 'app-header__link is-active';

export function AppHeader() {
  const { pathname } = useLocation();
  const learnActive = pathname.startsWith('/learn');
  const nextLearnActive = pathname.startsWith('/nextjs');
  const dashboardLabActive = pathname.startsWith('/dashboard-lab');

  return (
    <header className="app-header">
      <NavLink to="/" className="app-header__brand" end>
        <span className="app-header__logo" aria-hidden>
          ⚛
        </span>
        <span>
          <strong>Reactor</strong>
          <small>React 19 · TaskFlow curriculum</small>
        </span>
      </NavLink>
      <nav className="app-header__nav" aria-label="Primary">
        <NavLink to="/" className={({ isActive }) => (isActive ? active : base)} end>
          Home
        </NavLink>
        <NavLink to={`/learn/${learnEntry}`} className={({ isActive }) => (isActive || learnActive ? active : base)}>
          Learn React
        </NavLink>
        <NavLink
          to={`/nextjs/${firstNextSlug}`}
          className={({ isActive }) => (isActive || nextLearnActive ? active : base)}
        >
          Learn Next.js
        </NavLink>
        <NavLink
          to={`/dashboard-lab/${firstDashboardLabSlug}`}
          className={({ isActive }) => (isActive || dashboardLabActive ? active : base)}
        >
          Dashboard lab
        </NavLink>
        <NavLink to="/assignment" className={({ isActive }) => (isActive ? active : base)}>
          Assignment
        </NavLink>
      </nav>
    </header>
  );
}
