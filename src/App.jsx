import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { AppHeader } from './components/AppHeader';
import { chapters } from './data/chapters';
import { AssignmentPage } from './pages/AssignmentPage';
import { ChapterPage } from './pages/ChapterPage';
import { HomePage } from './pages/HomePage';
import { LearnLayout } from './pages/LearnLayout';

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
        <Route path="/assignment" element={<AssignmentPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
