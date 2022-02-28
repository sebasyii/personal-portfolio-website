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
  Tag,
} from '@chakra-ui/react';
import Image from 'next/image';
import ChakraNextImage from '@/components/common/ChakraNextImage';
import Navbar from '@/components/Navbar';
import ProjectMeta from '@/components/Projects/ProjectMeta';

const components = { Box, Image, Heading, Text };

const PostPage = ({
  frontMatter: { title, date, excerpt, image_url, tags },
  mdxSource,
}: {
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    image_url: string;
    tags: string[];
  };
  mdxSource: MDXRemoteSerializeResult;
}) => {
  return (
    <>
      <Navbar />

      <Box as="section" pt={{ base: 16 }} pb={{ base: 24 }}>
        <Box pos="relative" maxW="2xl" mx="auto" px={{ base: 6, md: 8 }}>
          <Heading mt={16} mb={6} fontSize="6xl">
            {title}
          </Heading>
          <Box pos="relative" w="100%" h={96} mb={3}>
            <ChakraNextImage
              src={`/projects${image_url}`}
              alt={`${title}-thumbnail-image`}
              height="100%"
              objectFit="cover"
            />
          </Box>
          <HStack justify="space-between" mb={6}>
            <HStack>
              <Text>{date}</Text>
            </HStack>
            <HStack>
              <Text>1,350 words</Text>
              <Text>7 min read</Text>
              <Text>188 views</Text>
            </HStack>
          </HStack>
          <ProjectMeta mb={16} tags={Array.isArray(tags) ? tags : []} />
          <MDXRemote {...mdxSource} components={components} />
        </Box>
      </Box>
    </>
  );
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
