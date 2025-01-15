import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';
import Hero from './pages/hero/Hero';
import Aura from './pages/Aura';

const App = () => {
  return (
    <Theme>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/aura' element={<Aura />} />
          </Routes>
        </BrowserRouter>
    </Theme>
  );
};

export default App;
