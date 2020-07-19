import React from 'react';
import { Link } from 'react-router-dom';
import  Grid  from './components/Grid';


function ProductHome() {
  
  const Shoes = {
    "a1": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "a2": {
      name: "JORDAN MARS",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "a3": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "a4": {
      name: "JORDAN MARS",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "a5": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "a6": {
      name: "JORDAN MARS",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "a7": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },

}
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