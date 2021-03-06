import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

import './MainPage.scss';

export default function MainPage() {
  return (
    <>
      <section className=' background stars'></section>
      <section className='mainpage-container'>
        <Navbar />
        <section className='main-section'>
          <Outlet />
        </section>
      </section>
    </>
  );
}
