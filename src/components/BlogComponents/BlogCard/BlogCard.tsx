import {
  Box,
  chakra,
  Flex,
  Link,
  useColorModeValue,
  HStack,
  Tag,
} from "@chakra-ui/react";
import React from "react";

interface BlogCardProps {
  postData: {
    title: string;
    publishedAt: string;
    description: string;
    seoDescription: string;
    category: string;
  };
}

const BlogCard = ({ postData }: BlogCardProps) => (
  <Box
    maxW="2xl"
    px={8}
    py={4}
    bg={useColorModeValue("brand.50", "gray.900")}
    shadow="md"
    rounded="md"
  >
    <Box mt={2}>
      <Link
        color={useColorModeValue("gray.700", "white")}
        fontFamily="heading"
        fontSize="2xl"
        fontWeight="700"
        _hover={{
          color: useColorModeValue("gray.600", "gray.200"),
          textDecor: "underline",
        }}
      >
        {postData.title}
      </Link>
      <chakra.p
        mt={2}
        color={useColorModeValue("gray.600", "gray.300")}
        fontFamily="heading"
      >
        {postData.description}
      </chakra.p>
    </Box>

    <HStack mt={2} mb={4}>
      <Tag>CTF</Tag>
    </HStack>

    <Flex alignItems="center" justifyContent="space-between" mt={4}>
      <Link
        color={useColorModeValue("brand.600", "brand.400")}
        _hover={{ textDecor: "underline" }}
      >
        Read more
      </Link>

      <chakra.span
        fontSize="sm"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {postData.publishedAt}
      </chakra.span>
    </Flex>
  </Box>
);

export default BlogCard;
