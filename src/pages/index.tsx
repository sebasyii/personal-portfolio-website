import { Box, Heading, Stack, VStack } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import path from "path";
import React from "react";
import SocialBar from "../components/common/SocialBar";
import AboutMe from "../components/home/AboutMe";
import ContactMe from "../components/home/ContactMe";
import Header from "../components/home/Header";
import Projects from "../components/home/Projects";
import Testimonial from "../components/home/Testimonial";

import matter from "gray-matter";
import fs from "fs";

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Sebastian | Home</title>
        <meta name="description" content="Portfolio page for Sebastian" />
      </Head>

      <Header />
      <AboutMe />
      <Projects projects={posts} />
      {/* <Testimonial /> */}
      <ContactMe />

      <SocialBar />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const files = fs.readdirSync(path.join("src/posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
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
      posts,
    },
  };
};

export default Home;
