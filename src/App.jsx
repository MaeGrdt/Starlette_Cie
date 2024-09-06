import Header from './components/Header/header';
import { Outlet } from 'react-router-dom';
// import Footer from './elements/footer';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
