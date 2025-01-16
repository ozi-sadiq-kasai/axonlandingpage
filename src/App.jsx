import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';
import Aura from './pages/Aura';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/aura' element={<Aura />} />
          </Routes>
        </BrowserRouter>
    </Theme>
  );
};

export default App;
