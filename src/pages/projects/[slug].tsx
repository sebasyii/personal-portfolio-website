import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { serialize } from "next-mdx-remote/serialize";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  VStack,
  Heading,
  HStack,
  Spinner,
  Divider,
  Text,
  Container,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";

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
  return (
    <Container
      maxW="70ch"
      py={56}
      fontFamily="Inter"
      color="whiteAlpha.900"
      lineHeight="26px"
      fontSize="16px"
      px={{ base: 10, lg: 0 }}
    >
      <VStack position="relative" alignItems="stretch" w="full" spacing={8}>
        <VStack alignItems="flex-start" spacing={3}>
          <Heading as="h1" size={"3xl"} fontWeight="extrabold">
            {title}
          </Heading>
          <Heading as="h3" size="sm" fontWeight="medium">
            {excerpt}
          </Heading>
          <Box pt={5}>
            <Image
              src={image_url}
              width={1600}
              height={900}
              objectFit="cover"
              alt={`Cover image for ${title}`}
            />
          </Box>
          <HStack
            divider={
              <Text mx={2} color="gray.500">
                •
              </Text>
            }
          >
            <Text color="gray.500" fontSize="sm">
              {date}
            </Text>
            {/* <Text color="gray.500" fontSize="sm">
            {views ?? <Spinner color="gray.500" size="xs" />} views
          </Text> */}
            {/* <Text color="gray.500" fontSize="sm">
            {readingTime}
          </Text> */}
          </HStack>
        </VStack>
        <MDXRemote {...mdxSource} components={components} />
      </VStack>
    </Container>
  );
};

export default PostPage;

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src/posts", slug + ".mdx"),
    "utf-8"
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
  const files = fs.readdirSync(path.join("src/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
