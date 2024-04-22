
import { Routes, Route } from 'react-router-dom'
import './App.css'
import History from './Pages/History'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import Footer from './components/Footer/Footer'
import Navbars from './components/navBar/Navbars'




function App() {


  return (
    <>
    <Navbars/>
      <Routes>
        
        <Route element= {<Landing/>} path ='/'/>
        <Route element= {<Home/>} path ='/home'/>
        <Route element= {<History/>} path ='/history'/>

      </Routes>
<Footer/>
    </>
  )
}

export default App
