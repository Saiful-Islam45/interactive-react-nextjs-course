import { Outlet } from 'react-router-dom';
import { DashboardLabSidebar } from '../components/DashboardLabSidebar';
import './LearnLayout.css';

export function DashboardLabLayout() {
  return (
    <div className="learn-layout">
      <DashboardLabSidebar />
      <main className="learn-layout__main">
        <Outlet />
      </main>
    </div>
  );
}
