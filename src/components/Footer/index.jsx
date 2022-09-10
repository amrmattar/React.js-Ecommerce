import React from "react";
import Logo from "../Logo";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const items = [
  {
    title: "Company Info",
    taps: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  { title: "Legal", taps: ["About Us", "Carrier", "We are hiring", "Blog"] },
  {
    title: "Features",
    taps: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    taps: ["IOS & Android", "Watch a Demo", "Customers", "API "],
  },
];

const Footer = () => {
  return (
    <footer className="pt-4 pb-5 bg-white">
      <div className="container">
        <div className="top flex-between align-items-center">
          <Logo />

          <div className="social me-2 flex-center gap-3 text-primary">
            <BsFacebook className="cu-pointer" />
            <BsInstagram className="cu-pointer" />
            <AiOutlineTwitter className="cu-pointer" />
          </div>
        </div>

        <hr />

        <div className="items row">
          {items.map((item, idx) => (
            <ul className="list-unstyled col-lg-2" key={idx}>
              <p className="fw-bold">{item.title}</p>

              {item.taps.map((tap, idx) => (
                <li className="small my-2 cu-pointer w-fit" key={idx}>
                  {tap}
                </li>
              ))}
            </ul>
          ))}

          <div className="touch-bar col-lg-4">
            <p className="fw-bold">Get In Touch</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control bg-light hide-box-shadow"
                placeholder="Your Email"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary py-2"
                type="button"
                id="button-addon2"
              >
                Subscribe
              </button>
            </div>
            <div className="small text-muted">Lore imp sum dolor Amit</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
