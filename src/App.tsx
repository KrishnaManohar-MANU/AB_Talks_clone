import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChallengeProvider } from './store/ChallengeContext';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import ChallengeDayPage from './pages/ChallengeDayPage';

function App() {
  return (
    <ChallengeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/day/:dayNumber" element={<ChallengeDayPage />} />
        </Routes>
      </BrowserRouter>
    </ChallengeProvider>
  );
}

export default App;