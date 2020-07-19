import React from 'react';
import { useParams } from 'react-router-dom';


function ProductDetail() {
  
    
  const Shoes = {
    
    "a1": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
    },
    "a2": {
      name: "JORDAN MARS ",
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
const {id} = useParams();
  
const ShosPro = Shoes[id];
if (!ShosPro) {
  return <h2>Not Found!</h2>;
}
const { name, img } = ShosPro;


    
    return (
    <div className="link">
     
      <h2>{name}</h2>
      <img src={img} height={500} alt={name} />
          
    </div>
  );
}

export default ProductDetail;
