import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurPartners from "../components/OurPartners";

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <OurPartners />
      <Footer />
    </>
  );
};

export default UserLayout;
