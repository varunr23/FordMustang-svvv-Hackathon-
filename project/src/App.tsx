import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { InternDashboard } from './pages/intern/Dashboard';
import { InternalMentorDashboard } from './pages/internal-mentor/Dashboard';
import { ExternalMentorDashboard } from './pages/external-mentor/Dashboard';
import { CoordinatorDashboard } from './pages/coordinator/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          
          {/* Intern Routes */}
          <Route path="intern">
            <Route index element={<InternDashboard />} />
          </Route>

          {/* Internal Mentor Routes */}
          <Route path="internal-mentor">
            <Route index element={<InternalMentorDashboard />} />
          </Route>

          {/* External Mentor Routes */}
          <Route path="external-mentor">
            <Route index element={<ExternalMentorDashboard />} />
          </Route>

          {/* Coordinator Routes */}
          <Route path="coordinator">
            <Route index element={<CoordinatorDashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;