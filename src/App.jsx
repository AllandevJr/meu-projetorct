import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';




function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Empresa" element={<Empresa />}/>
        <Route path="/Contato" element={<Contato />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
