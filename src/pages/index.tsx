import SimpleLayout from "@/components/Layouts/SimpleLayout";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import { allPosts, Post } from "contentlayer/generated";

import React, { ReactElement } from "react";
import dynamic from "next/dynamic";
import { NextPageWithLayout } from "@/types/shared";

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
  const posts: Post[] = allPosts
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
