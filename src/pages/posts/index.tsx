import BlogCard from "@/components/BlogComponents/BlogCard";
import SimpleLayout from "@/components/Layouts/SimpleLayout";
import {
  Box,
  Container,
  Heading,
  Stack,
  useBreakpointValue,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import React, { ReactElement } from "react";

import { allPosts } from "contentlayer/generated";
import { NextSeo } from "next-seo";

const Post = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo title="Posts" />
      <Box as="section" py={{ base: "16", md: "24" }} bg="bg-surface">
        <Container mb={16}>
          <Stack spacing={{ base: "8", md: "10" }}>
            <Stack spacing={{ base: "4", md: "6" }}>
              <Stack spacing="1">
                <Text
                  color="accent"
                  fontFamily="Space Mono"
                  fontSize={{ base: "sm", md: "md" }}
                  fontWeight="medium"
                >
                  Resource
                </Text>
                <Heading
                  fontWeight="semibold"
                  size={useBreakpointValue({ base: "md", md: "lg" })}
                >
                  View My Resources
                </Heading>
              </Stack>
            </Stack>
          </Stack>
        </Container>

        <Container>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
            {posts.map((post: any) => (
              <BlogCard key={post.slug} postData={post} />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map((post) => ({
    ...post,
  }));
  return {
    props: {
      posts,
    },
  };
};

Post.getLayout = (page: ReactElement) => <SimpleLayout>{page}</SimpleLayout>;

export default Post;
