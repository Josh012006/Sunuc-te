import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ExperiencePage } from './pages/ExperiencePage';
import { BookingPage } from './pages/BookingPage';
import { GuidePage } from './pages/GuidePage';
import { DashboardPage } from './pages/DashboardPage';
import { SearchPage } from './pages/SearchPage';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/experience/:id',
    Component: ExperiencePage,
  },
  {
    path: '/booking/:id',
    Component: BookingPage,
  },
  {
    path: '/guide/:id',
    Component: GuidePage,
  },
  {
    path: '/dashboard',
    Component: DashboardPage,
  },
  {
    path: '/search',
    Component: SearchPage,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);
