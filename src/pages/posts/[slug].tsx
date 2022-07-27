import BlogLayout from "@/components/Layouts/BlogLayout";
import {
  Avatar,
  chakra,
  ChakraComponent,
  Container,
  Heading,
  HeadingProps,
  HStack,
  Kbd,
  Stack,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import React from "react";
import ChakraNextImage from "@/components/common/ChakraNextImage";

import dynamic from "next/dynamic";
import Blockquote from "@/components/MDXComponents/Blockquote";
import { NextSeo } from "next-seo";
import HeadingTwo from "@/components/MDXComponents/HeadingTwo";
import MDXUnorderedList from "@/components/MDXComponents/MDXUnorderedList";
import MDXListItem from "@/components/MDXComponents/MDXListItem";
import MDXLink from "@/components/MDXComponents/MDXLink";

import { DateTime } from "luxon";
import MDXTable from "@/components/MDXComponents/MDXTable";
import MDXImage from "@/components/MDXComponents/MDXImage";

const Pre = dynamic(() => import("@/components/MDXComponents/Pre"), {
  ssr: false,
});

const mdxComponents = {
  h1: (props: HeadingProps) => <Heading {...props} />,
  h2: HeadingTwo,
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
    <Text
      my={4}
      fontFamily={"Inter"}
      fontSize="1rem"
      lineHeight={1.625}
      {...props}
    />
  ),
  pre: Pre,
  blockquote: Blockquote,
  ul: MDXUnorderedList,
  li: MDXListItem,
  a: MDXLink,
  Kbd,
  table: MDXTable,
  thead: Thead,
  tr: Tr,
  th: Th,
  tbody: Tbody,
  td: Td,
  // img: MDXImage,
};

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(post.body.code);

  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <>
      <NextSeo
        openGraph={{
          title: post.title,
          description: post.seoDescription,
          type: "article",
          article: {
            publishedTime: post.publishedAt,
          },
          images: [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: `The thumbnail of ${post.title}`,
            },
          ],
        }}
      />
      <chakra.main>
        <Container as="article" maxW="container.md" padding={10}>
          <ChakraNextImage
            src={post.image.startsWith("/") ? `${post.image}` : post.image}
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
            <HStack>
              <Avatar
                name={post.author.name}
                size="sm"
                src={post.author.image}
              />
              <Text color={textColor}>{post.author.name}</Text>
            </HStack>
            <HStack>
              <Text color={textColor}>
                {DateTime.fromISO(post.publishedAt).toFormat("dd LLL yyyy")}
              </Text>
              <Text color={textColor}>{post.readingTime.text}</Text>
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
