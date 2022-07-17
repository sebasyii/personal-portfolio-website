import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

interface SimpleLayoutProps {
  children: React.ReactNode;
}

const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SimpleLayout;
