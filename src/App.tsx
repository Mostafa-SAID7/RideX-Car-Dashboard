import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Overview from './pages/Overview';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Rent from './pages/Rent';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="buy" element={<Buy />} />
          <Route path="sell" element={<Sell />} />
          <Route path="rent" element={<Rent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
