import { Outlet } from 'react-router';
import Header from './Header/Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="bg-yellow-50 grid grid-rows-[auto_1fr_auto] h-full">
      <Header />

      <main className="h-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
