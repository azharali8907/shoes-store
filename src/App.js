import React from 'react';

import './App.css';
import Home from './Home';
import About from './About';
import { Routes, Route, } from 'react-router-dom';
import Products from './Products';
import ProductDetail from './ProductDetail';
import ProductHome from './ProductHome';
//import NavBar from './components/NavBar';
import Tabs from './components/Tabs';


function NotFound(){
  return(
    <h2>Page Not Found</h2>
  );
}

function App() {
  
  return (
    <div>
    <Routes>
     <Route path="/" element={<Home />}></Route>
    {/* <Route path="/about" element={<About/>}></Route>
    */} <Route path="products" element={<Products/>}>
        <Route path="/" element={<ProductHome/>}></Route>
        <Route path=":id" element={<ProductDetail/>}></Route> 
     </Route>
     <Route path="*" element={<NotFound/>}></Route>
    
     
    </Routes>
    </div>
  );
}

export default App;
