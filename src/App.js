import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

const App = () => {
  const ToggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#121224"
      document.title = 'QusarNews - Dark Mode';

    } else{
      setMode("light");
      document.body.style.backgroundColor="White"
      document.title = 'QusarNews - Light Mode';
    }
    }
    const [mode, setMode] = useState("light");
    return (
      <div>
        <Router>
        <Navbar mode={mode} ToggleMode={ToggleMode}/>
          <Routes>
            <Route exact path="/" element = {<News mode = {mode} key="general" category="general"/>}/>
            <Route exact path="/business"  element = {<News mode = {mode} key="business" category="business"/>}/>         
            <Route exact path="/entertainment"  element = {<News mode = {mode} key="entertainment" category="entertainment"/>}/>         
            <Route exact path="/health"  element = {<News mode = {mode} key="health" category="health"/>}/>         
            <Route exact path="/science"  element = {<News mode = {mode} key="science" category="science"/>}/>         
            <Route exact path="/sports"  element = {<News mode = {mode} key="sports" category="sports"/>}/>         
            <Route exact path="/technology" element = {<News mode = {mode} key="technology" category="technology"/>}/>    
          </Routes>
        </Router>
      </div>
    )
}

export default App

