import React from 'react'
import Header from './components/Header'
import "./App.css"
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <Router>

     <Header/>
     <Route path='/' Component={Home}/>
    </Router>
    
  )
}

export default App
