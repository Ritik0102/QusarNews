import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

const App = () => {
  const [mode, setMode] = useState("light");
  const ToggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#121224"

    } else{
      setMode("light");
      document.body.style.backgroundColor="White"
    }
    }
    return (
      <>
      <div>
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
      </div>
      </>
    )
}

export default App

