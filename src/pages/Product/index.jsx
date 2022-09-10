/* eslint-disable eqeqeq */
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/CartReducer";

import UserLayout from "../../layout";
import ProdcutCard from "../../components/ProdcutCard";
import GetStarts from "../../components/GetStart";

import { useParams, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import products from "../../static/db/products.json";

import {
  AiOutlineRight,
  AiFillEye,
  AiOutlineHeart,
  AiOutlineLeft,
} from "react-icons/ai";
import { BsCart } from "react-icons/bs";

const randomizePeoduct = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};
const randomProducts = randomizePeoduct([...products]).slice(0, 8);

// Current Product
const getCurrentProduct = (id) => {
  const currentProduct = products.find((product) => product.id == id);
  const imgs = [
    currentProduct?.img,
    "/static/thumb/01.jpg",
    "/static/thumb/02.jpg",
  ];

  return [currentProduct, imgs];
};

const ProductPage = () => {
  const { id } = useParams();
  const [currentProduct, imgs] = useMemo(() => getCurrentProduct(id), [id]);
  const [currentImg, setCurrentImg] = useState(currentProduct?.img);

  const dispatch = useDispatch();
  const products = useSelector((cart) => cart.product);

  const isExist = useMemo(
    () => products.find((prod) => prod == id),
    [id, products]
  );

  const nextImg = () => {
    const currentIdx = imgs.findIndex((img) => img === currentImg);

    if (imgs.length <= currentIdx + 1) return setCurrentImg(imgs[0]);

    setCurrentImg(imgs[currentIdx + 1]);
  };

  const prevImg = () => {
    const currentIdx = imgs.findIndex((img) => img === currentImg);

    if (!currentIdx) return setCurrentImg(imgs.at(-1));

    setCurrentImg(imgs[currentIdx - 1]);
  };

  const cartToggle = () => {
    if (isExist) {
      toast.success("success removed from cart", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return dispatch(removeFromCart(currentProduct.id));
    }

    dispatch(addToCart(currentProduct.id));
    toast.success("success add to cart", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    setCurrentImg(currentProduct?.img);
  }, [currentProduct]);

  return currentProduct ? (
    <UserLayout>
      <section className="container py-3">
        <nav>
          <div className="navigate-items d-flex align-items-center mt-2 mt-lg-0">
            <p className="item fw-bold m-0 me-1">Home</p>
            <AiOutlineRight />
            <p className="item text-muted m-0 ms-1">Shop</p>
          </div>
        </nav>

        <div className="product py-4 pb-5 mt-3 row">
          <div className="imgs col-md-4">
            <div className="img position-relative">
              <button
                className="carousel-control-prev text-light"
                style={{ opacity: 1 }}
                type="button"
                onClick={prevImg}
              >
                <AiOutlineLeft size={40} />
                <span className="visually-hidden">Previous</span>
              </button>

              <img
                height={350}
                width={400}
                className="w-100"
                src={currentImg}
                alt=""
              />

              <button
                className="carousel-control-next text-light"
                style={{ opacity: 1 }}
                type="button"
                onClick={nextImg}
              >
                <AiOutlineRight size={40} />
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className="imgs flex-center mt-3 gap-2">
              {imgs.map((img, idx) => (
                <img
                  key={idx}
                  className="cu-pointer"
                  width={80}
                  height={80}
                  src={img}
                  onClick={() => setCurrentImg(img)}
                  alt=""
                />
              ))}
            </div>
          </div>

          <div className="info col-md-5">
            <p className="name fw-bold fs-4 mt-2">{currentProduct.name}</p>

            <div className="start">
              <GetStarts item={currentProduct.rate} />
              <span className="text-muted small ms-1">10 Reviews</span>
            </div>

            <p className="price mb-0 mt-3 fs-3 fw-bold">
              ${currentProduct.price}
            </p>
            <p className="small mb-3">
              Availability :{" "}
              <span className="text-primary fw-bold">In Stock</span>
            </p>

            <p className="description small text-muted">
              {currentProduct.description}
            </p>

            <hr />

            <ul className="list-unstyled flex-center justify-content-start">
              {currentProduct.colors.map((color, idx) => (
                <li key={idx} className="cu-pointer">
                  <p
                    className="rounded-circle mx-1"
                    style={{
                      background: color,
                      width: "18px",
                      height: "18px",
                    }}
                  />
                </li>
              ))}
            </ul>

            <div className="buttons d-flex align-items-center gap-2">
              <button
                className={`btn ${isExist ? "btn-danger" : "btn-primary"}`}
                onClick={cartToggle}
              >
                {isExist ? "Remove From Cart" : "Add To Cart"}
              </button>

              <div className="actions flex-center gap-2">
                <div className="item border p-2 flex-center bg-white rounded-circle w-fit cu-pointer">
                  <AiOutlineHeart />
                </div>

                <div className="item border p-2 flex-center bg-white rounded-circle w-fit cu-pointer">
                  <BsCart />
                </div>

                <div className="item border p-2 flex-center bg-white rounded-circle w-fit cu-pointer">
                  <AiFillEye />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="best">
        <div className="container">
          <h2 className="fs-4 fw-bold">BESTSELLER PRODUCTS</h2>
          <hr />

          <div className="results">
            <div className="row">
              {randomProducts?.map((prodcut, idx) => (
                <div key={idx} className="col-md-3 py-3">
                  <ProdcutCard prodcut={prodcut} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  ) : (
    <Navigate to="/" />
  );
};

export default ProductPage;
