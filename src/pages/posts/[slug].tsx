import BlogLayout from "@/components/Layouts/BlogLayout";
import {
  Box,
  chakra,
  ChakraComponent,
  Container,
  Heading,
  HeadingProps,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import React from "react";
import ChakraNextImage from "@/components/common/ChakraNextImage";

const mdxComponents = {
  h1: (props: HeadingProps) => <Heading {...props} />,
  h2: (props: HeadingProps) => (
    <Heading
      marginTop="2.25rem"
      marginBottom="0.75rem"
      fontSize="1.85rem"
      fontWeight="semibold"
      lineHeight={1.3}
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <Heading
      marginTop="1.5rem"
      marginBottom="0.75rem"
      fontSize="1.35rem"
      fontWeight="semibold"
      lineHeight={1.4}
      {...props}
    />
  ),
  p: (props: ChakraComponent<"p">) => (
    <chakra.p
      fontFamily={"Inter"}
      fontSize="1.1rem"
      lineHeight={1.625}
      my={4}
      {...props}
    />
  ),
  pre: (props: ChakraComponent<"pre">) => (
    <chakra.pre
      fontFamily={"monospace"}
      fontSize="0.8rem"
      lineHeight={1.625}
      my={4}
      p={6}
      rounded="lg"
      bg="gray.800"
      {...props}
    />
  ),
  blockquote: (props: ChakraComponent<"blockquote">) => (
    <chakra.blockquote
      px={4}
      py={2}
      color="whiteAlpha.700"
      fontStyle="italic"
      rounded="lg"
      bg="gray.800"
      {...props}
    />
  ),
};

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      {/* <NextSeo /> */}
      <chakra.main>
        <Container as="article" maxW="container.md" padding={10}>
          <ChakraNextImage
            src={post.image}
            alt={""}
            width="100%"
            height="400px"
            rounded="2xl"
            overflow="hidden"
          />

          <Heading
            as="h1"
            my={6}
            fontSize="3rem"
            fontWeight="600"
            lineHeight="1.1"
            letterSpacing="tighter"
          >
            {post.title}
          </Heading>

          <Stack justify="space-between" direction="row">
            <Text color="gray.300">{post.author.name}</Text>
            <HStack>
              <Text color="gray.300">{post.publishedAt}</Text>
              <Text color="gray.300">{post.readingTime.text}</Text>
            </HStack>
          </Stack>
          <MDXContent components={mdxComponents} />
        </Container>
      </chakra.main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);

  return {
    props: {
      post,
    },
  };
};

Post.getLayout = (page: React.ReactNode) => <BlogLayout>{page}</BlogLayout>;

export default Post;
