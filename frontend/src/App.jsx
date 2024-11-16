
import Home from './pages/Home';
import Upload from './pages/Upload';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analysing from './sections/Analysing';
import Result from './sections/Result';
import MainVerticalLine from "./assets/MainVerticalLine.svg"
import ScrollToTop from './ScrollToTop';
function App() {

  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <NavBar/>
    <div className='MainVeticalLineOuter'>
      <img src={MainVerticalLine} alt="" className='VeticalLineLeft'/>
      <img src={MainVerticalLine} alt="" className='VeticalLineRight'/>
    </div>
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
