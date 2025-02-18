import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Theme from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import About from "./pages/About";
import Questionnaire from "./components/Questionnaire";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="questionnaire" element={<Questionnaire />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
};

export default App;
