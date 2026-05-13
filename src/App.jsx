import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';
import { chapters } from './data/chapters';
import { firstDashboardLabSlug } from './data/dashboardLabChapters';
import { firstNextSlug } from './data/nextjsChapters';
import { AssignmentPage } from './pages/AssignmentPage';
import { ChapterPage } from './pages/ChapterPage';
import { DashboardLabChapterPage } from './pages/DashboardLabChapterPage';
import { DashboardLabLayout } from './pages/DashboardLabLayout';
import { HomePage } from './pages/HomePage';
import { LearnLayout } from './pages/LearnLayout';
import { NextChapterPage } from './pages/NextChapterPage';
import { NextLearnLayout } from './pages/NextLearnLayout';

function RootLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}

const firstSlug = chapters[0]?.slug ?? 'ch-01';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnLayout />}>
          <Route index element={<Navigate to={firstSlug} replace />} />
          <Route path=":slug" element={<ChapterPage />} />
        </Route>
        <Route path="/nextjs" element={<NextLearnLayout />}>
          <Route index element={<Navigate to={firstNextSlug} replace />} />
          <Route path=":slug" element={<NextChapterPage />} />
        </Route>
        <Route path="/dashboard-lab" element={<DashboardLabLayout />}>
          <Route index element={<Navigate to={firstDashboardLabSlug} replace />} />
          <Route path=":slug" element={<DashboardLabChapterPage />} />
        </Route>
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
