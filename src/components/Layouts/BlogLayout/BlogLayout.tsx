import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default BlogLayout;
