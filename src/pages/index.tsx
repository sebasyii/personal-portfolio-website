// import AboutMe from "@/components/AboutMe";
// import ContactMe from "@/components/ContactMe";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import SimpleLayout from "@/components/Layouts/SimpleLayout";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import React, { ReactElement } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"));
const AboutMe = dynamic(() => import("@/components/AboutMe"));
const Projects = dynamic(() => import("@/components/Projects"));
const ContactMe = dynamic(() => import("@/components/ContactMe"));

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects projects={projects} />
      {/* Achievements */}
      <ContactMe />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("data/projects"));
  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("data/projects", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      projects,
    },
  };
};

Home.getLayout = (page: ReactElement) => <SimpleLayout>{page}</SimpleLayout>;

export default Home;
