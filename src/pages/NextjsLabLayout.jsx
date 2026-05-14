import { Outlet } from 'react-router-dom';
import { NextjsLabSidebar } from '../components/NextjsLabSidebar';
import './LearnLayout.css';

export function NextjsLabLayout() {
  return (
    <div className="learn-layout">
      <NextjsLabSidebar />
      <main className="learn-layout__main">
        <Outlet />
      </main>
    </div>
  );
}
