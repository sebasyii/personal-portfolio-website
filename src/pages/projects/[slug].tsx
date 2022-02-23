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
} from "@chakra-ui/react";

const PostPage = ({
  frontMatter: { title, date },
  mdxSource,
}: {
  frontMatter: { title: string; date: string };
  mdxSource: MDXRemoteSerializeResult;
}) => {
  return (
    <Container
      maxW="70ch"
      py={20}
      fontFamily="Inter"
      color="whiteAlpha.900"
      lineHeight="26px"
      fontSize="16px"
      px={{ base: 10, lg: 0 }}
    >
      <VStack position="relative" alignItems="stretch" w="full" spacing={8}>
        <VStack alignItems="flex-start" spacing={3}>
          <Heading as="h1" size="lg">
            {title}
          </Heading>
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
        <MDXRemote {...mdxSource} />
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
