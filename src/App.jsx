import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollManager from './components/ScrollManager/ScrollManager';
import HomePage from './pages/HomePage/HomePage';
import OfferPage from './pages/OfferPage/OfferPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const TITLES = {
  '/': 'Bronfood CRM — управление заказами для кафе и кофеен',
  '/offer': 'Публичная оферта — Bronfood CRM',
  '/privacy': 'Политика конфиденциальности — Bronfood CRM',
  '/payment': 'Порядок оплаты и возврата — Bronfood CRM',
  '/success': 'Спасибо за заявку — Bronfood CRM',
};

function TitleManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] || 'Bronfood CRM';
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <TitleManager />

      <a className="visually-hidden" href="#main-content">
        Перейти к основному содержимому
      </a>

      <Header />

      <main id="main-content" className="content-area">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offer" element={<OfferPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
