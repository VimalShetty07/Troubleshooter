import React from 'react'
import Header from './components/Header'
import "./App.css"
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <Router>

     <Header/>
     <Routes>
     <Route path='/' Component={Home}/>
     </Routes>
     
    </Router>
    
  )
}

export default App
