import { chakra, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";

const BlogContent = ({ content }: any) => {
  return (
    <chakra.main py={16}>
      <Container maxWidth="5xl">
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem as={chakra.article} colSpan={8}>
            {content}
          </GridItem>
          <GridItem as={chakra.aside} ml={10} colSpan={4}>
            <chakra.nav
              display="flex"
              flexDirection="column"
              backgroundColor="gray.800"
              px={4}
              py={6}
              top="24px"
              rounded="md"
              position="sticky"
              maxHeight="calc(100vh - 40px)"
              overflow="auto"
              boxShadow="2xl"
            >
              <Heading as="h2" color="brand.200" size="xs">
                Table Of Contents
              </Heading>
              <chakra.a>Template Columns</chakra.a>
              <chakra.a>Template Columns</chakra.a>
              <chakra.a>Template Columns</chakra.a>
            </chakra.nav>
          </GridItem>
        </Grid>
      </Container>
    </chakra.main>
  );
};

export default BlogContent;
