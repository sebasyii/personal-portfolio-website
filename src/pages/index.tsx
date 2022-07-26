// import AboutMe from "@/components/AboutMe";
// import ContactMe from "@/components/ContactMe";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import SimpleLayout from "@/components/Layouts/SimpleLayout";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { allPosts } from "contentlayer/generated";

import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import { GeneratedType, NextPageWithLayout } from "@/types/shared";

const Header = dynamic(() => import("@/components/Header"));
const AboutMe = dynamic(() => import("@/components/AboutMe"));
const Projects = dynamic(() => import("@/components/Projects"));
const ContactMe = dynamic(() => import("@/components/ContactMe"));

const Home: NextPageWithLayout = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects projects={posts} />
      {/* Achievements */}
      <ContactMe />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts: GeneratedType[] = allPosts
    .filter((post) => post.category.toLowerCase() === "projects")
    .map((post) => ({
      ...post,
    }));

  return {
    props: {
      posts,
    },
  };
};

Home.getLayout = (page: ReactElement) => <SimpleLayout>{page}</SimpleLayout>;

export default Home;
