import React from 'react';
import {  Outlet } from 'react-router-dom';

function Products() {
  
  return (
    
    <div>
     <h1>Welcome To Shoe store </h1>
     <Outlet />
     
    </div>
  );
}

export default Products;
