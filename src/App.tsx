import React from 'react';
import Easy from './Component/EasyLearn/Easy';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import SecondPage from './Component/Second/SecondPage';
import { Routes,BrowserRouter,Route } from 'react-router-dom';

function App() {
 
 
  return (
    <BrowserRouter>
    <div className="App  text-center">
      <Navbar/>
     <Routes>
       <Route path="/" element={<Easy/>}/>
       <Route path="/category/*" element={<SecondPage/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
