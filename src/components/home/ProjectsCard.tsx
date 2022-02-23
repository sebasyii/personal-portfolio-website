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

const MotionBox = motion<BoxProps>(Box);

type ProjectsCardType = BoxProps & {
  projectDetails: { [key: string]: any };
};

const ProjectsCard = (props: ProjectsCardType) => {
  const { projectDetails, ...rest } = props;

  return (
    <MotionBox
      // backgroundColor="rgba(255, 255, 255, 0.7)"
      width="full"
      height="250px"
      rounded="lg"
      initial={{ scale: 1, opacity: 0, x: 0, y: 200 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -250px 0px" }}
      whileHover={{ scale: 1.05 }}
      position="relative"
      // {...rest}
      _hover={{
        cursor: "pointer",
      }}
    >
      <Image
        src="/charlotteweb.png"
        layout="fill"
        objectFit="cover"
        alt={projectDetails.title}
      />
    </MotionBox>
  );
};

export default ProjectsCard;
