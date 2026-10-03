import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { LevelPage } from './pages/LevelPage';
import { LessonPage } from './pages/LessonPage';
import { VocabularyPage } from './pages/VocabularyPage';
import { GrammarPage } from './pages/GrammarPage';
import { ListeningPage } from './pages/ListeningPage';
import { ReadingPage } from './pages/ReadingPage';
import { ShadowingPage } from './pages/ShadowingPage';
import { PronunciationPage } from './pages/PronunciationPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { AuthPage } from './pages/AuthPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';

export const App: React.FC = () => {
  return (
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
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="auth" element={<AuthPage />} />
                <Route path="admin" element={<AdminDashboardPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Routes>
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
