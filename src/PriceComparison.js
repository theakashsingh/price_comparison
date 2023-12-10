import React from "react";
import PriceCard from "./PriceCard";
import priceData from "./priceData.json"

const PriceComparison = () => {
  return (
    <div className="price_card_wrapper">
        {
            priceData.map((data,index)=>(
                <div className="main" key={index}>
                <PriceCard data={data}/>
              </div>
            ))
        }
    
     
    </div>
  );
};

export default PriceComparison;
