import React from "react";
import { LayoutProp } from "../../lib/types/layoutType";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: LayoutProp) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
