import { BrowserRouter,Routes,Route } from "react-router-dom"
import GlobalStyles from "./components/styles/Global"
import Hero from "./pages/hero/Hero"
import Aura from "./pages/Aura"

const App = () => {
  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/aura' element={<Aura />}/>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default App