import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';
import About from './pages/About';
import Questionnaire from './components/Questionnaire'
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/questionnaire' element={<Questionnaire />} />
          </Routes>
        </BrowserRouter>
    </Theme>
  );
};

export default App;
