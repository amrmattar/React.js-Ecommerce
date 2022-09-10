import React from "react";
import style from "../../styles/categoryCard.module.css";

const CategoryCard = ({ name, items }) => {
  return (
    <div className={`flex-center text-light cu-pointer ${style.categoryCard}`}>
      <div className="info text-center">
        <p className="mb-1">{name}</p>
        <span className="small">{items} Items</span>
      </div>
    </div>
  );
};

export default CategoryCard;
