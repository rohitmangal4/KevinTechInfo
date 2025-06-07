// src/layouts/ServicesLayout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ServicesLayout() {
  return (
      <main className="flex-1">
        <Outlet />
      </main>
    
  );
}
