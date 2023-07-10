import { Outlet } from 'react-router';
import Header from './Header/Header';
import Footer from './footer/Footer';

function AppLayout() {
  return (
    <div className="bg-stone-100 grid h-full">
      <Header />

      <main className="h-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
