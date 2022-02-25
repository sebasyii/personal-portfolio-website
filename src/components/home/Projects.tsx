import {
  Container,
  Flex,
  SimpleGrid,
  Text,
  Divider,
  Heading,
  HStack,
} from "@chakra-ui/react";

import NextLink from "next/link";
import Image from "next/image";
import React from "react";
import ProjectsCard from "./ProjectsCard";

type ProjectsType = {
  projects: {
    frontMatter: { [key: string]: any };
    slug: string;
  }[];
};

const Projects = ({ projects }: ProjectsType) => {
  return (
    <Flex
      as="section"
      position="relative"
      overflow="hidden"
      px={{ base: 5, md: 0 }}
    >
      <Flex
        position="absolute"
        zIndex="-1"
        left="85vw"
        top={{ base: "50px", md: "-20px" }}
      >
        <Image
          src="/my-projects-grid.svg"
          width="400px"
          height="250px"
          layout="fixed"
          alt="Dots Grid"
        />
      </Flex>
      <Container maxW="7xl">
        <HStack direction="row" align="center" mb={10} gap={5}>
          <Heading as="h2" size="2xl" color="#FFF" fontWeight="bold">
            My Projects
          </Heading>
          <Flex width={24}>
            <Divider backgroundColor="#fff" height="1px" />
          </Flex>
        </HStack>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 1 }}
          spacingX={{ base: 8, lg: 12 }}
          spacingY={12}
          mt={6}
          maxW="4xl"
          marginInline="auto"
        >
          {projects.map((project, pid) => (
            <ProjectsCard
              projectDetails={project.frontMatter}
              projectSlug={project.slug}
              key={project.slug}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Projects;
