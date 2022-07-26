import BlogCard from "@/components/BlogComponents/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  chakra,
  Container,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface SimpleLayoutProps {
  children: React.ReactNode;
}

const CategoryLayout = ({ children }: SimpleLayoutProps) => {
  const { category } = children.props;

  return (
    <>
      <Navbar />
      <chakra.main py={32}>
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
            <Text>{category.length} articles</Text>
          </Stack>

          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10}>
            <BlogCard
              postData={{
                title: "",
                publishedAt: "",
                description: "",
                seoDescription: "",
                category: "",
              }}
            />
          </SimpleGrid>
        </Container>
      </chakra.main>
      <Footer />
    </>
  );
};

export default CategoryLayout;
