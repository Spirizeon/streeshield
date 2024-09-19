import './App.css'
import Home from './pages/Home';
import Upload from './pages/Upload';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analysing from './sections/Analysing';
import Result from './sections/Result';
function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/analyse' element={<Analysing/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
