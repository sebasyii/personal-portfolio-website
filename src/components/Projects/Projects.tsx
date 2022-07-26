import { GeneratedType } from "@/types/shared";
import {
  Box,
  Divider,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import DotGrid from "../common/DotGrid";
import ProjectCard from "./ProjectCard";

type ProjectsType = {
  projects: GeneratedType[];
};

const Projects = ({ projects }: ProjectsType) => {
  const textColor = useColorModeValue("brand.600", "brand.200");
  const backgroundColor = useColorModeValue("white", "gray.800");
  return (
    <Box
      as="section"
      pt={{ base: 16 }}
      pb={{ base: 24 }}
      bg={backgroundColor}
      id="projects"
    >
      <Box pos="relative" maxW="6xl" mx="auto" px={{ base: 6, md: 8 }}>
        <DotGrid
          width={30}
          height={20}
          radius={5}
          space={15}
          pos="absolute"
          left={-450}
          zIndex={1}
          bottom={-300}
        />
        <HStack justify="end" mb={10} spacing={3}>
          <Divider w={48} borderColor={textColor} />

          <Heading
            color={textColor}
            fontFamily="Space Mono"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            My Projects
          </Heading>
        </HStack>
        <VStack maxW="4xl" mx="auto" spacing={12}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} projectDetails={project} />
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Projects;
