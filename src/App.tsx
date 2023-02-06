import React from 'react';
import { FirstPage } from './pages/FirstPage';
import { MenuPage } from './pages/MenuPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="container">
          <Routes>
            <Route element={<FirstPage />} path="/" />
            <Route element={<MenuPage />} path="/menu" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;