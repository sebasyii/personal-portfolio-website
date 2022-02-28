import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import { GetStaticProps, InferGetStaticPropsType } from 'next/types';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects projects={projects} />
      <ContactMe />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('src/posts'));
  const projects = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/posts', filename),
      'utf-8',
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });
  return {
    props: {
      projects,
    },
  };
};
