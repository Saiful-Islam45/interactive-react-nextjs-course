import { Outlet } from 'react-router-dom';
import { NextjsCourseSidebar } from '../components/NextjsCourseSidebar';
import './LearnLayout.css';

export function NextjsLearnLayout() {
  return (
    <div className="learn-layout">
      <NextjsCourseSidebar />
      <main className="learn-layout__main">
        <Outlet />
      </main>
    </div>
  );
}
