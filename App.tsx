import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Clarity from './pages/Clarity';
import Catalyst from './pages/Catalyst';
import Horizon from './pages/Horizon';
import Signal from './pages/Signal';

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
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/clarity" element={<Layout><Clarity /></Layout>} />
        <Route path="/catalyst" element={<Layout><Catalyst /></Layout>} />
        <Route path="/horizon" element={<Layout><Horizon /></Layout>} />
        <Route path="/signal" element={<Layout><Signal /></Layout>} />
      </Routes>
    </HashRouter>
  );
};

export default App;