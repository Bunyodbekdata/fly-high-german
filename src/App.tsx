import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { MainLayout } from './layouts/MainLayout';
import { ErrorBoundary } from './components/common/ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const CoursesPage = lazy(() => import('./pages/CoursesPage').then((m) => ({ default: m.CoursesPage })));
const LevelPage = lazy(() => import('./pages/LevelPage').then((m) => ({ default: m.LevelPage })));
const LessonPage = lazy(() => import('./pages/LessonPage').then((m) => ({ default: m.LessonPage })));
const VocabularyPage = lazy(() => import('./pages/VocabularyPage').then((m) => ({ default: m.VocabularyPage })));
const GrammarPage = lazy(() => import('./pages/GrammarPage').then((m) => ({ default: m.GrammarPage })));
const ListeningPage = lazy(() => import('./pages/ListeningPage').then((m) => ({ default: m.ListeningPage })));
const ReadingPage = lazy(() => import('./pages/ReadingPage').then((m) => ({ default: m.ReadingPage })));
const ShadowingPage = lazy(() => import('./pages/ShadowingPage').then((m) => ({ default: m.ShadowingPage })));
const PronunciationPage = lazy(() => import('./pages/PronunciationPage').then((m) => ({ default: m.PronunciationPage })));
const DashboardPage = lazy(() => import('./pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const ProfilePage = lazy(() => import('./pages/ProfilePage').then((m) => ({ default: m.ProfilePage })));
const AuthPage = lazy(() => import('./pages/AuthPage').then((m) => ({ default: m.AuthPage })));
const AdminDashboardPage = lazy(() =>
  import('./pages/admin/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage }))
);
const CertificateTestsPage = lazy(() =>
  import('./pages/CertificateTestsPage').then((m) => ({ default: m.CertificateTestsPage }))
);
const CertificateTestRoomPage = lazy(() =>
  import('./pages/CertificateTestRoomPage').then((m) => ({ default: m.CertificateTestRoomPage }))
);
const CertificateResultPage = lazy(() =>
  import('./pages/CertificateResultPage').then((m) => ({ default: m.CertificateResultPage }))
);
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <ProgressProvider>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="courses" element={<CoursesPage />} />
                  <Route path="pronunciation" element={<PronunciationPage />} />
                  <Route path="levels/:levelCode" element={<LevelPage />} />
                  <Route path="courses/:levelCode/lesson/:lessonId" element={<LessonPage />} />
                  <Route path="vocabulary" element={<VocabularyPage />} />
                  <Route path="grammar" element={<GrammarPage />} />
                  <Route path="listening" element={<ListeningPage />} />
                  <Route path="reading" element={<ReadingPage />} />
                  <Route path="shadowing" element={<ShadowingPage />} />
                  <Route path="certificate-tests" element={<CertificateTestsPage />} />
                  <Route path="certificate-tests/:testId" element={<CertificateTestRoomPage />} />
                  <Route path="certificate-tests/results/:attemptId" element={<CertificateResultPage />} />
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="auth" element={<AuthPage />} />
                  <Route path="admin" element={<AdminDashboardPage />} />
                  <Route path="privacy" element={<PrivacyPage />} />
                  <Route path="terms" element={<TermsPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
