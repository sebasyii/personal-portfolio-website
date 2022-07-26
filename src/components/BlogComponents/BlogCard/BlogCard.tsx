import ChakraNextLink from "@/components/common/ChakraNextLink";
import {
  Box,
  chakra,
  Flex,
  Link,
  useColorModeValue,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import React from "react";

interface BlogCardProps {
  postData: {
    title: string;
    publishedAt: string;
    description: string;
    seoDescription: string;
    category: string;
    slug: string;
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
      <ChakraNextLink
        color={useColorModeValue("gray.700", "white")}
        fontFamily="heading"
        fontSize="2xl"
        fontWeight="700"
        _hover={{
          color: useColorModeValue("gray.600", "brand.300"),
          textDecor: "none",
        }}
        href={`/posts/${postData.slug}`}
      >
        {postData.title}
      </ChakraNextLink>
      <chakra.p
        mt={2}
        color={useColorModeValue("gray.600", "gray.300")}
        fontFamily="heading"
      >
        {postData.description}
      </chakra.p>
    </Box>

    <HStack mt={2} mb={5}>
      <Tag colorScheme="teal">{postData.category}</Tag>
    </HStack>

    <Flex alignItems="center" justifyContent="space-between" mt={4}>
      <ChakraNextLink
        color={useColorModeValue("brand.800", "brand.500")}
        _hover={{
          textDecor: "none",
          color: useColorModeValue("brand.600", "brand.400"),
        }}
        href={`/posts/${postData.slug}`}
      >
        Read more
      </ChakraNextLink>

      <chakra.span
        fontSize="sm"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {DateTime.fromISO(postData.publishedAt).toLocaleString(
          DateTime.DATE_FULL
        )}
      </chakra.span>
    </Flex>
  </Box>
);

export default BlogCard;
