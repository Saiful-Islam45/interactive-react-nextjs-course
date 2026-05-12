import { Outlet } from 'react-router-dom';
import { CourseSidebar } from '../components/CourseSidebar';
import './LearnLayout.css';

export function LearnLayout() {
  return (
    <div className="learn-layout">
      <CourseSidebar />
      <main className="learn-layout__main">
        <Outlet />
      </main>
    </div>
  );
}
