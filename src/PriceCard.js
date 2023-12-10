import React from "react";

import Feature from "./Feature";

const PriceCard = ({ data }) => {
  return (
    <div className="price_card">
      <div className="price_type">{data.price_type}</div>
      <div className="price_related">{data.price_related}</div>
      <div className="price_saving">
        <div className="saving_value">
          <span>$</span>
          <span>{data.price_saving.price_saving_value}</span>
        </div>
        <div className="saving_percentage">
          SAVE {data.price_saving.price_saving_percentage}%
        </div>
      </div>
      <div className="price">
        <span className="price_sign">$</span>
        <span className="price_value">{data.price}</span>
        <span className="price_per_month">/mo</span>
      </div>

      <div className="offer">{data.offer}</div>
      {/* add to cart button */}
      <button className="add_to_cart">Add to Cart</button>

      <div className="plan_renew">${data.renew}/mo when you renew</div>

      <div className="hr"></div>

      {/* features */}

      <Feature features={data.features} />
    </div>
  );
};

export default PriceCard;
