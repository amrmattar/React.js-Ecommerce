import React from "react";

const imgs = {
  src: "/static/partners",
  num: 6,
};

const OurPartners = () => {
  return (
    <section className="bg-light py-2">
      <div className="container">
        <div className="imgs flex-center flex-column flex-lg-row">
          {[...Array(imgs.num)].map((_, idx) => (
            <img
              key={idx}
              width={60}
              className="mx-4 opacity-hover my-4"
              src={`/static/partners/0${idx + 1}.png`}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
