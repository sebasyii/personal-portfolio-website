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
  console.log(projects);
  return (
    <Flex as="section" position="relative">
      <Flex position="absolute" zIndex="-1" right="75vw" top="70px">
        <Image
          src="/my-projects-grid.svg"
          width="500px"
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
          columns={{ base: 1, sm: 1, md: 3 }}
          spacingX={{ base: 8, lg: 12 }}
          spacingY={12}
          mt={6}
        >
          {projects.map((project, pid) => (
            <NextLink passHref href={`/projects/${project.slug}`} key={pid}>
              <ProjectsCard projectDetails={project.frontMatter} />
            </NextLink>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Projects;
