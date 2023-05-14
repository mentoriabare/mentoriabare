import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import QuemSomos from './Pages/QuemSomos'
import Mentoria from './Pages/Mentoria'
import Mentores from './Pages/Mentores'
import Comunidade from './Pages/Comunidade'
import Principios from './Pages/Principios'
import ComoParticipar from './Pages/ComoParticipar'
import FaleConosco from './Pages/FaleConosco'

function App() {

  return (
    <Router>
      <Header/>

      <Routes>
        <Route path="/" element={<QuemSomos/>} />
        <Route path="/mentoria" element={<Mentoria/>} />
        <Route path="/mentores" element={<Mentores/>} />
        <Route path="/comunidade" element={<Comunidade/>} />
        <Route path="/principios" element={<Principios/>} />
        <Route path="/como-participar" element={<ComoParticipar/>} />
        <Route path="/fale-conosco" element={<FaleConosco/>} />
      </Routes>

      <Footer/>
    </Router>
  )
}

export default App
