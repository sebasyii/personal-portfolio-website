import { Box, chakra, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import ChakraNextImage from "../common/ChakraNextImage";
import ChakraNextLink from "../common/ChakraNextLink";
import ProjectMeta from "./ProjectMeta";

const ProjectCard = ({ projectDetails }: any) => {
  const { frontMatter, slug } = projectDetails;
  return (
    <Box w="full">
      <ChakraNextImage
        src={`/projects${frontMatter.image_url}`}
        alt={`${slug}-image`}
        w="full"
        h={{ base: "300px", md: "500px" }}
        rounded="sm"
      />

      <Box>
        <Stack>
          <ChakraNextLink
            href={`/projects/${slug}`}
            _hover={{
              textDecoration: "none",
            }}
          >
            <Heading
              className="animated-underline"
              mt={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="bold"
              lineHeight={1.1}
              _hover={{
                color: "brand.400",
              }}
              cursor="pointer"
              transition="all 0.2s"
            >
              {frontMatter.title}
            </Heading>
          </ChakraNextLink>

          <chakra.p fontSize={{ base: "sm", md: "md" }}>
            {frontMatter.excerpt}
          </chakra.p>
          <ProjectMeta
            tags={Array.isArray(frontMatter.tags) ? frontMatter.tags : []}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
