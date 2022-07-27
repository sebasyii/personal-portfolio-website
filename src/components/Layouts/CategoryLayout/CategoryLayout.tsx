import BlogCard from "@/components/BlogComponents/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import {
  chakra,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Post } from "contentlayer/generated";
import React from "react";
import { ReactElement } from "react";

interface SimpleLayoutProps {
  children: ReactElement<{ category: Post[] }>;
}

const pluralize = (word: string, shouldPluralise: boolean) => {
  if (shouldPluralise && word.slice(-1) !== "s") {
    return `${word}s`;
  }

  if (!shouldPluralise && word.slice(-1) === "s") {
    return word.slice(0, -1);
  }

  return word;
};

const CategoryLayout = ({ children }: SimpleLayoutProps) => {
  const { category } = children.props;

  return (
    <>
      <Navbar />
      <chakra.main py={32} bg="bg-surface">
        <Container maxW="container.lg">
          <Stack
            align="end"
            justify="space-between"
            direction={{ sm: "column", md: "row" }}
            mb={8}
          >
            <Heading as="h1" fontFamily="Space Mono" fontSize="5xl">
              {category[0].category}
            </Heading>
            <Text>
              {category.length}
              {` ${pluralize(category[0].category, category.length > 1)}`}
            </Text>
          </Stack>

          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
            {children}
          </SimpleGrid>
        </Container>
      </chakra.main>
      <Footer />
    </>
  );
};

export default CategoryLayout;
