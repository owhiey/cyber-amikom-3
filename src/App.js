import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
import ContentList from './pages/ContentList';
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';
import RegisterPage from './pages/RegisterPage';
import NewsPage from './pages/NewsPage';
import AddNewsPage from './pages/AddNewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import LessonPage from './pages/LessonPage';
import LessonDetailPage from './pages/LessonDetailPage';
import AddLessonPage from './pages/AddLessonPage';
import DashboardPage from './pages/DashboardPage';
import DashboardNewsPage from './pages/DashboardNewsPage';
import DashboardLessonPage from './pages/DashboardLessonPage';
import UploadFilePage from './pages/UploadFilePage';
import DownloadFilePage from './pages/DownloadFilePage';

export default function App() {
  return (
    <div className="text-primary-white">
      <header className="fixed h-auto w-full py-5 transition-all z-10 top-0 left-0 bg-primary_background-darkgray02">
        <div className="container-big flex flex-col sm:flex-row gap-y-4 justify-between items-center">
          <h1 className="text-primary-blue text-4xl font-bold">CYBER AMIKOM</h1>
          <Navigation />
        </div>
      </header>
      <main className="mt-32 md:mt-20 h-auto min-h-[calc(100vh-5rem)]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/learn" element={<ContentList />} />
          <Route path="/berita" element={<NewsPage />}/>
          <Route path="/lesson" element={<LessonPage />}/>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/articles/:id" element={<DetailPage />} />
          <Route path="/berita/:id" element={<NewsDetailPage />}/>
          <Route path="/lesson/:id" element={<LessonDetailPage />}/>
          <Route path="/content/add" element={<AddPage />} />
          <Route path="/dashboard/berita/add" element={<AddNewsPage />}/>
          <Route path="/dashboard/lesson/add" element={<AddLessonPage />}/>
          <Route path="/dashboard/upload" element={<UploadFilePage />}/>
          <Route path="/download" element={<DownloadFilePage />}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />}/>
          <Route path="/dashboard/berita" element={<DashboardNewsPage />}/>
          <Route path="/dashboard/lesson" element={<DashboardLessonPage />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer className="absolute left-0 w-full h-auto py-4 transition-all bg-primary_background-darkgray02">
        <div className="container-big flex flex-col justify-center items-center min-[425px]:flex-row min-[425px]:justify-between">
          <div className="footer-item">
            <p>&copy; Copyright 2023 CYBER AMIKOM</p>
          </div>
          <div className="footer-item">
            <p>
              Powered by <span className="text-primary-blue">C22-256</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
