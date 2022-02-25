import { Icon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Flex,
  Link,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialBar = () => {
  return (
    <Flex
      position="fixed"
      right={10}
      bottom={0}
      zIndex={30}
      height="350px"
      display={{
        base: "none",
        md: "initial",
      }}
    >
      <VStack gap={2}>
        <Link isExternal href="https://github.com/sebasyii">
          <Icon
            as={FaGithub}
            fontSize={30}
            transition="all 0.2s ease"
            _hover={{
              transform: "scale(1.2)",
            }}
          />
        </Link>
        <Link
          isExternal
          href="https://www.linkedin.com/in/sebastian-yii-5272841a3/"
        >
          <Icon
            as={FaLinkedin}
            fontSize={30}
            transition="all 0.2s ease"
            _hover={{
              transform: "scale(1.2)",
            }}
          />
        </Link>
        <Divider
          orientation="vertical"
          height={350}
          mt={2}
          backgroundColor="white"
        />
      </VStack>
    </Flex>
  );
};

export default SocialBar;
