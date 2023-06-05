import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ComoParticipar, Comunidade, FaleConosco, Mentores, Mentoria, Principios, QuemSomos } from './Pages'
import Header  from './Components/Header'


function App() {

  return (
    <Router>
      <header className='bg-[#DEF2D6]'>
        <Header />
      </header>
      <main className='w-full sm:p-8 px-4 py-8 bg-[#DEF2D6] min-h-[calc(100vh-80px)]'>
        <Routes>
          <Route path="/" element={<QuemSomos/>} />
          <Route path="/mentoria" element={<Mentoria/>} />
          <Route path="/mentores" element={<Mentores/>} />
          <Route path="/comunidade" element={<Comunidade/>} />
          <Route path="/principios" element={<Principios/>} />
          <Route path="/como-participar" element={<ComoParticipar/>} />
          <Route path="/fale-conosco" element={<FaleConosco/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
