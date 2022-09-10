import React from "react";
import { Link } from "react-router-dom";

const ProdcutCard = ({ prodcut }) => {
  return (
    <article className="bg-white">
      <Link clas="text-de-none" to={`/product/${prodcut.id}`}>
        <div className="img flex-center m-auto" style={{ maxWidth: "300px" }}>
          <img className="w-100 cu-pointer" src={prodcut.img} alt="" />
        </div>
      </Link>

      <div className="info text-center">
        <Link
          className="text-decoration-none text-dark"
          to={`/product/${prodcut.id}`}
        >
          <p className="name cu-pointer fw-bold mt-2 mb-1">{prodcut.name}</p>
        </Link>
        <p className="small text-muted m-0">{prodcut.Department}</p>

        <div className="price flex-center">
          <p className="mb-2 old-price text-decoration-line-through text-muted me-1">
            ${prodcut.oldPrice}
          </p>
          <p className="mb-2 text-success" style={{ color: "#23856D" }}>
            ${prodcut.price}
          </p>
        </div>

        <div className="colors">
          <ul className="list-unstyled flex-center">
            {prodcut.colors.map((color, idx) => (
              <li key={idx} className="cu-pointer">
                <p
                  className="rounded-circle mx-1"
                  style={{
                    background: color,
                    width: "13px",
                    height: "13px",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ProdcutCard;
