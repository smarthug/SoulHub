import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './ui/RootLayout';
import HomePage from './ui/pages/HomePage';
import DashboardPage from './ui/pages/DashboardPage';
import CharactersPage from './ui/pages/CharactersPage';
import CharacterDetailPage from './ui/pages/CharacterDetailPage';
import NotFoundPage from './ui/pages/NotFoundPage';
// Lazy placeholders (to be implemented)
import { lazy } from 'react';

const ExplorePage = lazy(()=>import('./ui/pages/ExplorePage'));
const CommitPage = lazy(()=>import('./ui/pages/CommitPage'));
const VerifyPage = lazy(()=>import('./ui/pages/VerifyPage'));
const CreatePage = lazy(()=>import('./ui/pages/CreatePage'));
const AboutPage = lazy(()=>import('./ui/pages/AboutPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
  { index: true, element: <HomePage /> },
  { path: 'dashboard', element: <DashboardPage /> },
  { path: 'explore', element: <ExplorePage /> },
      { path: 'characters', element: <CharactersPage /> },
      { path: 'characters/:id', element: <CharacterDetailPage /> },
  { path: 'characters/:id/commits', element: <CommitPage /> },
  { path: 'characters/:id/verify', element: <VerifyPage /> },
  { path: 'create', element: <CreatePage /> },
  { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> }
    ],
  },
]);

export default router;
