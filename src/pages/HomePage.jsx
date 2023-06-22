import Header from 'components/Header';
import ScreensPage from 'components/ScreensPage/ScreensPage';
import Sidebar from 'components/SideBar/SideBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Sidebar />
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        <ScreensPage />
      </Suspense>
    </>
  );
}

export default HomePage;
