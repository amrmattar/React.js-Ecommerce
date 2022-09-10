/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";

import { GrBottomCorner } from "react-icons/gr";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const taps = [
  { title: "Home", dropdown: false },
  { title: "Shop", dropdown: true },
  { title: "About", dropdown: false },
  { title: "Blog", dropdown: false },
  { title: "Contact", dropdown: false },
  { title: "Pages", dropdown: false },
];

const Header = () => {
  const products = useSelector((cart) => cart.product);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light`}>
      <div className="container">
        <Link className="text-decoration-none cu-pointer" to="/">
          <Logo />
        </Link>

        <button
          className="navbar-toggler p-3 mt-2 flex-center border-0 hide-box-shadow"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img width={25} src="/static/hamburgerIcom.svg" alt="" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 small fw-bold">
            {taps.map((tap, idx) => (
              <li key={idx} className={`nav-item cu-pointer`}>
                <a
                  className={`nav-link m-0 active flex-center`}
                  aria-current="page"
                  href="#"
                >
                  <span>{tap.title}</span>

                  {tap.dropdown && (
                    <GrBottomCorner
                      style={{ rotate: "45deg", marginBottom: "6px" }}
                      className="ms-1"
                      size={14}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="actions flex-center flex-column flex-lg-row text-primary">
            <div className="flex-center">
              <AiOutlineUser />
              <p className="sign m-0 ms-1 text-primary small fw-bold">
                <span className="cu-pointer">Login</span> /{" "}
                <span className="cu-pointer">Register</span>
              </p>
            </div>

            <div className="icons flex-center gap-3 ms-3 flex-column flex-lg-row mt-2 mt-lg-0">
              <div className="search">
                <BiSearch className="cu-pointer" />
              </div>

              <div className="cart flex-center">
                <BsCart className="cu-pointer" />
                <span className="small ms-1">{products.length}</span>
              </div>

              <div className="fav flex-center">
                <AiOutlineHeart className="cu-pointer" />
                <span className="small ms-1">7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
