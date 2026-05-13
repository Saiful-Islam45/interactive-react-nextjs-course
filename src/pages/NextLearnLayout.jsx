import { Outlet } from 'react-router-dom';
import { NextCourseSidebar } from '../components/NextCourseSidebar';
import './LearnLayout.css';

export function NextLearnLayout() {
  return (
    <div className="learn-layout">
      <NextCourseSidebar />
      <main className="learn-layout__main">
        <Outlet />
      </main>
    </div>
  );
}
