import './App.css'

//Importando elementos do react router 
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Importando pages
import Home from './pages/home'
import About from './pages/about'
import Menu from './pages/menu'

//Importando NavBar
import NavBar from './components/NavBar'


function App() {
 

  return (
    <>
      <h1>Ola mundo!</h1>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
