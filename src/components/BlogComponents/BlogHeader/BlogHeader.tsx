import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const BlogHeader = () => {
  return (
    <Box pt={12} pb={10} backgroundColor="gray.800">
      <Container maxWidth="5xl" px={10}>
        <Breadcrumb colorScheme="brand">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading as="h1" mt={2} mb={4} size="md">
          The Surprising Truth About Pixels and Accessibility
        </Heading>
      </Container>
    </Box>
  );
};

export default BlogHeader;
