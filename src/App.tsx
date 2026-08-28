
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { HomePage, ForumPage, GuidesPage, EventsPage, MarketplacePage, DetailPage } from './pages/Pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="forum" element={<ForumPage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path=":type/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
