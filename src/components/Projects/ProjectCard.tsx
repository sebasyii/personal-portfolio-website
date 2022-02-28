import { ProjectType } from '@/types/projectTypes';
import { Box, chakra, Image, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import ChakraNextLink from '../common/ChakraNextLink';
import ProjectMeta from './ProjectMeta';

type ProjectCardType = {
  projectDetails: ProjectType;
};

const ProjectCard = ({ projectDetails }: ProjectCardType) => {
  const { frontMatter, slug } = projectDetails;
  return (
    <Box>
      <Image
        w="full"
        h={{ base: '300px', md: '500px' }}
        alt="Article"
        fit="cover"
        rounded="sm"
        src={`/projects/${frontMatter.image_url}`}
      />

      <Box>
        <Stack mt={5}>
          <ChakraNextLink
            href={`/projects/${slug}`}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Heading
              className="animated-underline"
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="bold"
              _hover={{
                color: 'brand.400',
              }}
              cursor="pointer"
              transition="all 0.2s"
            >
              {frontMatter.title}
            </Heading>
          </ChakraNextLink>

          <chakra.p fontSize={{ base: 'sm', md: 'md' }} fontFamily="Space Mono">
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
