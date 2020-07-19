import React from 'react';

import  Grid  from './components/Grid';


function ProductHome() {
  
  
  return (
    <div>
     <Grid/>
    </div>
  );
}

export default ProductHome;

{/*
 <ul>
       {Object.entries(Shoes).map(([id,{name, img}]) => (

        <li key={id}>
          <Link to={`/products/${id}`}>
          <h2>{name}</h2>
          <img src={img} height={150} alt={name} />
          </Link>
        </li>
       
       )
       )}
     </ul>
*/}