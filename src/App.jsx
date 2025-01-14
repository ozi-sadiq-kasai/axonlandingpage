import { BrowserRouter,Routes,Route } from "react-router-dom"
import Hero from "./pages/hero/Hero"
import Aura from "./pages/Aura"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/aura' element={<Aura />}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App