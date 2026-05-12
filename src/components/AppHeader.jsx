import { NavLink, useLocation } from 'react-router-dom';
import { chapters } from '../data/chapters';
import './AppHeader.css';

const learnEntry = chapters[0]?.slug ?? 'ch-01';

const base = 'app-header__link';
const active = 'app-header__link is-active';

export function AppHeader() {
  const { pathname } = useLocation();
  const learnActive = pathname.startsWith('/learn');

  return (
    <header className="app-header">
      <NavLink to="/" className="app-header__brand" end>
        <span className="app-header__logo" aria-hidden>
          ⚛
        </span>
        <span>
          <strong>Reactor</strong>
          <small>React 19 · beginner path · TaskFlow examples</small>
        </span>
      </NavLink>
      <nav className="app-header__nav" aria-label="Primary">
        <NavLink to="/" className={({ isActive }) => (isActive ? active : base)} end>
          Home
        </NavLink>
        <NavLink to={`/learn/${learnEntry}`} className={({ isActive }) => (isActive || learnActive ? active : base)}>
          Learn
        </NavLink>
        <NavLink to="/assignment" className={({ isActive }) => (isActive ? active : base)}>
          Assignment
        </NavLink>
      </nav>
    </header>
  );
}
