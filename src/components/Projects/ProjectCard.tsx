import { Box, chakra, Heading, Stack } from "@chakra-ui/react";
import { Post } from "contentlayer/generated";
import React from "react";
import ChakraNextImage from "../common/ChakraNextImage";
import ChakraNextLink from "../common/ChakraNextLink";
import ProjectMeta from "./ProjectMeta";

interface ProjectCardProps {
  projectDetails: Post;
}

const ProjectCard = ({ projectDetails }: ProjectCardProps) => {
  return (
    <Box w="full">
      <ChakraNextImage
        src={`${projectDetails.image}`}
        alt={`${projectDetails.title}-image`}
        w="full"
        h={{ base: "300px", md: "500px" }}
        rounded="sm"
      />

      <Box>
        <Stack>
          <ChakraNextLink
            href={`/posts/${projectDetails.slug}`}
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
              {projectDetails.title}
            </Heading>
          </ChakraNextLink>

          <chakra.p fontSize={{ base: "sm", md: "md" }}>
            {projectDetails.description}
          </chakra.p>
          <ProjectMeta
            tags={Array.isArray(projectDetails.tags) ? projectDetails.tags : []}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
