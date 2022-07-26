import CategoryLayout from "@/components/Layouts/CategoryLayout";

import { allPosts } from "contentlayer/generated";
import type { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";

const Category = ({ category }) => {
  console.log(category);
  return <div>Category</div>;
};

Category.getLayout = (page: ReactElement) => (
  <CategoryLayout>{page}</CategoryLayout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts
    .map((post) => post.category)
    .filter((value, index, a) => a.indexOf(value) === index);
  return {
    paths: paths.map((path) => ({
      params: { category: path.toLowerCase() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = allPosts.filter(
    (post) => post.category.toLowerCase() === params?.category
  );

  return {
    props: {
      category,
    },
  };
};

export default Category;
