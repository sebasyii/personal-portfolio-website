import {
  Center,
  Box,
  useColorModeValue,
  Stack,
  Heading,
  Text,
  BoxProps,
} from "@chakra-ui/react";
import {
  CustomDomComponent,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const MotionBox = motion<BoxProps>(Box);

type ProjectsCardType = BoxProps & {
  projectDetails: { [key: string]: any };
  projectSlug: string;
};

const ProjectsCard = (props: ProjectsCardType) => {
  const { projectDetails, projectSlug, ...rest } = props;
  console.log(projectDetails);
  return (
    // <MotionBox
    //   // backgroundColor="rgba(255, 255, 255, 0.7)"
    //   width="full"
    //   height="250px"
    //   rounded="lg"
    //   initial={{ scale: 1, opacity: 0, x: 0, y: 200 }}
    //   whileInView={{ opacity: 1, x: 0, y: 0 }}
    //   viewport={{ once: true, margin: "0px 0px -250px 0px" }}
    //   whileHover={{ scale: 1.05 }}
    //   position="relative"
    //   // {...rest}
    //   _hover={{
    //     cursor: "pointer",
    //   }}
    // >
    //   <Image
    //     src="/charlotteweb.png"
    //     layout="fill"
    //     objectFit="cover"
    //     alt={projectDetails.title}
    //   />
    // </MotionBox>
    <Link href={`/projects/${projectSlug}`}>
      <Box>
        <Box pos="relative" boxShadow={"2xl"} rounded={"lg"} role="group">
          <Box
            cursor="pointer"
            transition="all 0.4s ease"
            _hover={{
              shadow: "md",
            }}
            rounded="xl"
            overflow="hidden"
            _after={{
              transition: "all 0.3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              rounded: "xl",
              top: 0,
              left: 0,
              backgroundImage: `url(${projectDetails.image_url})`,
              filter: "blur(5px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(7px)",
              },
            }}
          >
            <Image
              src={projectDetails.image_url}
              alt={`Cover Image for ${projectDetails.title}`}
              width={1600}
              height={900}
              layout="responsive"
              objectFit="cover"
            />
          </Box>
        </Box>
        <Box mt={4}>
          <Heading
            as="h3"
            mb={1}
            fontWeight="semibold"
            color="white"
            fontSize="2xl"
            cursor="pointer"
            _hover={{
              textDecoration: "underline",
            }}
          >
            {projectDetails.title}
          </Heading>
          <Text mb={2} noOfLines={3}>
            {projectDetails.excerpt}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};

export default ProjectsCard;
