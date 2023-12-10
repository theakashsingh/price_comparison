import React, { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { GoQuestion } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa";

const Feature = ({ features }) => {
  const [showMore, setShowMore] = useState(false);
  const [showValue, setShowValue] = useState(1);

  const handleShowMore = () => {
    setShowMore(!showMore);
    setShowValue(showValue === features.length ? 1 : features.length);
  };

  return (
    <div>
      {features.slice(0, showValue).map((item, index) => (
        <div className="features" key={index}>
          <div className="features_type">{item.features_type}</div>

          {item.features_value.map((feature, id) => (
            <div className="features_value" key={id}>
              <div className="value">
                {feature.feature ? (
                  <FcCheckmark />
                ) : (
                  <div className="cross">
                    <RxCross2 />
                  </div>
                )}

                <span>{feature.feature_value}</span>
              </div>
              <GoQuestion />
            </div>
          ))}
        </div>
      ))}

      <div className="show_more" onClick={handleShowMore}>
        {showMore ? "See less features" : "See all features"}

        <span
          style={{
            transform: showMore ? "rotate(-180deg)" : "rotate(0)",
            transition: "0.7s",
          }}
        >
          <FaAngleDown />
        </span>
      </div>
    </div>
  );
};

export default Feature;
