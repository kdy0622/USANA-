import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import BusinessPage from './pages/BusinessPage';
import ProductPage from './pages/ProductPage';
import MentorPage from './pages/MentorPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-800 bg-white">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/mentor" element={<MentorPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;