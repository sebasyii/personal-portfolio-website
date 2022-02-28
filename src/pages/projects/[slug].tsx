import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { serialize } from 'next-mdx-remote/serialize';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
  VStack,
  Heading,
  HStack,
  Spinner,
  Divider,
  Text,
  Container,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';

const components = { Box, Image, Heading, Text };

const PostPage = ({
  frontMatter: { title, date, excerpt, image_url },
  mdxSource,
}: {
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    image_url: string;
  };
  mdxSource: MDXRemoteSerializeResult;
}) => {
  return <MDXRemote {...mdxSource} components={components} />;
};

export default PostPage;

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/posts', slug + '.mdx'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src/posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
